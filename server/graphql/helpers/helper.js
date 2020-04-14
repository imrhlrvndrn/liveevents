const Event = require('../../models/Event');
const Booking = require('../../models/Booking');
const Artist = require('../../models/Artist');
const Refund = require('../../models/Refund');
const User = require('../../models/User');

const transformEvent = async (event) => {
    return {
        ...event._doc,
        _id: event.id,
        creator: getUserById.bind(this, event._doc.creator),
        artists: getArtistsOfEvent.bind(this, event._doc.artists),
        attendees: getAttendeesOfEvent.bind(this, event._doc.attendees),
        startDate: new Date(event._doc.startDate).toString(),
        endDate: new Date(event._doc.endDate).toString(),
        createdAt: new Date(event._doc.createdAt).toString(),
        updatedAt: new Date(event._doc.updatedAt).toString(),
    };
};

const transformUser = async (user) => {
    return {
        ...user._doc,
        _id: user.id,
        password: null,
        createdEvents: getAllCreatedEventsOfUser.bind(this, user._doc.createdEvents),
        bookedEvents: getAllBookedEventsOfUser.bind(this, user._doc.bookedEvents),
        birthDate: new Date(user._doc.birthDate).toString(),
        createdAt: new Date(user._doc.createdAt).toString(),
        updatedAt: new Date(user._doc.updatedAt).toString(),
    };
};

const transformBooking = async (booking) => {
    return {
        ...booking._doc,
        _id: booking.id,
        eventId: getEventById.bind(this, booking._doc.eventId),
        attendeeId: getAttendeeById.bind(this, booking._doc.attendeeId),
        refundId: getRefundsOfBooking.bind(this, booking._doc.refundId),
        createdAt: new Date(booking._doc.createdAt).toString(),
        updatedAt: new Date(booking._doc.updatedAt).toString(),
    };
};

const transformArtist = async (artist) => {
    return {
        ...artist._doc,
        _id: artist.id,
        eventId: getEventById.bind(this, artist._doc.eventId),
        userId: getUserById.bind(this, artist._doc.userId),
        createdAt: new Date(artist._doc.createdAt).toString(),
        updatedAt: new Date(artist._doc.updatedAt).toString(),
    };
};

const transformRefund = async (refund) => {
    return {
        ...refund._doc,
        _id: refund.id,
        eventId: getEventById.bind(this, refund._doc.eventId),
        bookingId: getBookingById.bind(this, refund._doc.bookingId),
        createdAt: new Date(refund._doc.createdAt).toString(),
        updatedAt: new Date(refund._doc.updatedAt).toString(),
    };
};

const getUserById = async (creatorId) => {
    const returnedCreator = await User.findById(creatorId);
    console.log(returnedCreator);
    return transformUser(returnedCreator);
};

const getEventById = async (eventId) => {
    const returnedEvent = await Event.findById(eventId);
    return transformEvent(returnedEvent);
};

const getAttendeeById = async (attendeeId) => {
    const returnedAttendee = await User.findById(attendeeId);
    return transformUser(returnedAttendee);
};

const getBookingById = async (bookingId) => {
    const returnedBooking = await Booking.findById(bookingId);
    return transformBooking(returnedBooking);
};

const getArtistById = async (artistId) => {
    const returnedArtist = await Artist.findById(artistId);
    return transformArtist(returnedArtist);
};

const getArtistsOfEvent = async (artistIds) => {
    const returnedArtists = await Artist.find({ _id: { $in: artistIds } });

    return returnedArtists.map((artist) => {
        return transformArtist(artist);
    });
};

const getAttendeesOfEvent = async (attendeeIds) => {
    const returnedBookedByUsers = await Booking.find({ _id: { $in: attendeeIds } });

    return returnedBookedByUsers.map((singleBooking) => {
        return transformBooking(singleBooking);
    });
};

const getAllBookedEventsOfUser = async (bookedEventIds) => {
    const returnedBookedEvents = await Booking.find({ _id: { $in: bookedEventIds } });

    return returnedBookedEvents.map((singleBookedEvent) => {
        return transformBooking(singleBookedEvent);
    });
};

const getAllCreatedEventsOfUser = async (createdEventIds) => {
    const returnedCreatedEvents = await Event.find({ _id: { $in: createdEventIds } });

    return returnedCreatedEvents.map((singleCreatedEvent) => {
        return transformEvent(singleCreatedEvent);
    });
};

const getRefundsOfBooking = async (refundIds) => {
    const returnedRefunds = await Refund.find({ _id: { $in: refundIds } });
    return returnedRefunds.map((singleRefund) => {
        return transformRefund(singleRefund);
    });
};

const deleteAllCreatedEventsOfUser = async (createdEventsIds) => {
    return createdEventsIds.forEach(async (event) => {
        const deletedEvent = await Event.findByIdAndDelete(event._id);
        deletedEvent.artists.forEach((artist) => {
            return Artist.findByIdAndDelete(artist._id);
        });
        deletedEvent.attendees.forEach(async (booking) => {
            const deletedBooking = await Booking.findByIdAndDelete(booking._id);
            deletedBooking.refundId.forEach((refund) => {
                return Refund.findByIdAndDelete(refund._id);
            });
        });
    });
};

const deleteAllBookedEventsOfUser = async (bookedEventIds) => {
    await Booking.findByIdAndDelete({ _id: { $in: bookedEventIds } });
};

const deleteAllArtistsOfEvent = async (artistIds) => {
    await Artist.findByIdAndDelete({ _id: { $in: artistIds } });
};

const deleteAllAttendeesOfEvent = async (attendeeIds) => {
    await Booking.findByIdAndDelete({ _id: { $in: attendeeIds } });
};

module.exports = {
    transformEvent: transformEvent,
    transformUser: transformUser,
    transformBooking: transformBooking,
    transformRefund: transformRefund,
    transformArtist: transformArtist,
    getUserById: getUserById,
    getEventById: getEventById,
    getBookingById: getBookingById,
    getAttendeeById: getAttendeeById,
    getArtistById: getArtistById,
    getArtistsOfEvent: getArtistsOfEvent,
    getAttendeesOfEvent: getAttendeesOfEvent,
    getAllBookedEventsOfUser: getAllBookedEventsOfUser,
    getAllCreatedEventsOfUser: getAllCreatedEventsOfUser,
    getRefundsOfBooking: getRefundsOfBooking,
    deleteAllCreatedEventsOfUser: deleteAllCreatedEventsOfUser,
    deleteAllBookedEventsOfUser: deleteAllBookedEventsOfUser,
    deleteAllArtistsOfEvent: deleteAllArtistsOfEvent,
    deleteAllAttendeesOfEvent: deleteAllAttendeesOfEvent,
};
