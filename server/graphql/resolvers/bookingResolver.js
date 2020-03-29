const Booking = require("../../models/Booking");
const Event = require("../../models/Event");
const Refund = require("../../models/Refund");
const User = require("../../models/User");
const { transformBooking } = require("../helpers/helper");

module.exports = {
    createBooking: async args => {
        let {
            baseAmount,
            numberOfTicketsForAdults,
            numberOfTicketsForChildren,
            tier
        } = args.bookingInput.eventAmountInfo;

        const newBooking = new Booking({
            entity: "booking",
            eventId: "5e80ab2a94a1c004607e0ade",
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
                discountedAmount: 0
            }
        });

        try {
            let returnedNewBooking = await newBooking.save();

            let eventsBooking = await Event.findOne({ _id: "5e80ab2a94a1c004607e0ade" });
            eventsBooking.attendees.push(returnedNewBooking._id);
            eventsBooking.save();

            let usersBooking = await User.findById("5e80aa6a9e568c50a0e65faa");
            usersBooking.bookedEvents.push(returnedNewBooking._id);
            usersBooking.save();

            return transformBooking(returnedNewBooking);
        } catch (error) {
            throw error;
        }
    }
};
