const Booking = require("../../models/Booking");
const Event = require("../../models/Event");
const Refund = require("../../models/Refund");
const User = require("../../models/User");
const { transformBooking } = require("../helpers/helper");

module.exports = {
    bookings: async () => {
        const allReturnedBookings = await Booking.find({});
        return allReturnedBookings.map((booking) => {
            return transformBooking(booking);
        });
    },
    createBooking: async (args) => {
        let {
            baseAmount,
            numberOfTicketsForAdults,
            numberOfTicketsForChildren,
            tier,
        } = args.bookingInput.eventAmountInfo;

        const newBooking = new Booking({
            entity: "booking",
            eventId: "5e871290fd9f4d29e8748084",
            attendeeId: "5e80aa6a9e568c50a0e65faa",
            promocode: args.bookingInput.promocode || "",
            bookingStatus: "booked",
            isFree: args.bookingInput.isFree || false,
            eventAmountInfo: {
                numberOfTicketsForAdults: numberOfTicketsForAdults || 0,
                numberOfTicketsForChildren: numberOfTicketsForChildren || 0,
                tier: tier || "",
                taxInfo: [{ taxName: "GST", taxAmount: 300 }],
                baseAmount: baseAmount,
                totalAmount:
                    baseAmount * numberOfTicketsForAdults +
                    (baseAmount * numberOfTicketsForChildren) / 2,
                discountedAmount: 0,
            },
        });

        try {
            let returnedNewBooking = await newBooking.save();

            let eventsBooking = await Event.findOne({ _id: "5e871290fd9f4d29e8748084" });
            eventsBooking.attendees.push(returnedNewBooking._id);
            eventsBooking.save();

            let usersBooking = await User.findById("5e80aa6a9e568c50a0e65faa");
            usersBooking.bookedEvents.push(returnedNewBooking._id);
            usersBooking.save();

            return transformBooking(returnedNewBooking);
        } catch (error) {
            throw error;
        }
    },
    cancelBooking: async (args) => {
        try {
            let cancelledBooking = await Booking.findById(args.id);
            let cancelledBookingEvent = await Event.findById(cancelledBooking.eventId);
            cancelledBookingEvent.attendees.pull(args.id);
            cancelledBookingEvent.save();

            let cancelledBookingUser = await User.findById(cancelledBooking.attendeeId);
            cancelledBookingUser.bookedEvents.pull(args.id);
            cancelledBookingUser.save();

            const deletedBooking = await Booking.findByIdAndRemove(args.id);

            return transformBooking(deletedBooking);
        } catch (error) {
            throw error;
        }
    },
    transferBooking: async (args) => {
        const transferedBooking = await Booking.findById(args.id);
        const transferedFromUser = await User.findById(transferedBooking.attendeeId);
        transferedFromUser.bookedEvents.pull(args.id);
        await transferedFromUser.save();

        const transferedToUser = await User.findById(args.userId);
        transferedToUser.bookedEvents.push(args.id);
        await transferedFromUser.save();

        transferedBooking.attendeeId = args.userId;
        await transferedBooking.save();

        return transformBooking(transferedBooking);
    },
};
