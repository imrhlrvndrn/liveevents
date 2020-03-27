const Event = require("../../models/Event");
const Refund = require("../../models/Refund");
const User = require("../../models/User");
const { transformBooking } = require("../helpers/helper");

module.exports = {
    createBooking: async args => {
        const newBooking = {
            entity: "booking",
            promocode: args.BookingInput.promocode,
            quantityOfTickets: args.BookingInput.quantityOfTickets,
            bookingStatus: "booked",
            isFree: args.BookingInput.isFree || false,
            eventAmountInfo: {
                numberOfTicketsForAdults: args.BookingInput.numberOfTicketsForAdults || 0.0,
                numberOfTicketsForChildren: args.BookingInput.numberOfTicketsForChildren || 0.0,
                tier: args.BookingInput.tier || "",
                baseAmount: args.BookingInput.baseAmount,
                totalAmount:
                    args.BookingInput.baseAmount * args.BookingInput.numberOfTicketsForAdults +
                    (args.BookingInput.baseAmount * args.BookingInput.numberOfTicketsForChildren) /
                        2,
                discountedAmount: 0
            }
        };
    }
};
