const Events = require("../../models/Events");
const Users = require("../../models/Users");

const transformEvent = async event => {
    return {
        ...event._doc,
        _id: event.id,
        userId: getUserById.bind(this, event._doc.userId),
        speakers: getSpeakersOfEvent.bind(this, event._doc.speakers),
        bookedBy: getBookedByUsersOfEvent.bind(this, event._doc.bookedBy),
        startDate: new Date(event._doc.startDate).toString(),
        endDate: new Date(event._doc.endDate).toString(),
        createdAt: new Date(user._doc.createdAt).toString(),
        updatedAt: new Date(user._doc.updatedAt).toString()
    };
};

const transformUser = async user => {
    return {
        ...user._doc,
        _id: user.id,
        password: null,
        bookedEvents: getAllBookedEventsOfUser.bind(this, user._doc.bookedEvents),
        createdEvents: getAllCreatedEventsOfUser.bind(this, user._doc.createdEvents),
        createdAt: new Date(user._doc.createdAt).toString(),
        updatedAt: new Date(user._doc.updatedAt).toString()
    };
};

const getUserById = async userId => {
    const returnedUser = await Users.findById(userId);

    return transformUser(returnedUser);
};

const getSpeakersOfEvent = async speakerIds => {
    const returnedSpeakers = await Users.find({ _id: { $in: speakerIds } });

    return returnedSpeakers.map(speaker => {
        return transformUser(speaker);
    });
};

const getBookedByUsersOfEvent = async bookedByIds => {
    const returnedBookedByUsers = await Users.find({ _id: { $in: bookedByIds } });

    return returnedBookedByUsers.map(user => {
        return transformUser(user);
    });
};

const getAllBookedEventsOfUser = async bookedEvents => {
    const returnedBookedEvents = await Events.find({ _id: { $in: bookedEvents } });

    return returnedBookedEvents.map(bookeEvent => {
        return transformEvent(bookeEvent);
    });
};

const getAllCreatedEventsOfUser = async createdEvents => {
    const returnedCreatedEvents = await Events.find({ _id: { $in: createdEvents } });

    return returnedCreatedEvents.map(createdEvent => {
        return transformEvent(createdEvent);
    });
};

module.exports = {
    transformEvent: transformEvent,
    transformUser: transformUser,
    getUserById: getUserById,
    getSpeakersOfEvent: getSpeakersOfEvent,
    getBookedByUsersOfEvent: getBookedByUsersOfEvent,
    getAllBookedEventsOfUser: getAllBookedEventsOfUser,
    getAllCreatedEventsOfUser: getAllCreatedEventsOfUser
};
