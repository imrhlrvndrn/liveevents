const Booking = require('../../models/Booking');
const Event = require('../../models/Event');
const Refund = require('../../models/Refund');
const User = require('../../models/User');
const { transformBooking } = require('../helpers/helper');

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

        let totalAmount =
            baseAmount * numberOfTicketsForAdults + (baseAmount * numberOfTicketsForChildren) / 2;

        const newBooking = new Booking({
            entity: 'booking',
            eventId: '5e92ff22aac0a018247e230b',
            attendeeId: '5e904ee796f04a0948c1c14c',
            promocode: args.bookingInput.promocode || '',
            bookingStatus: 'booked',
            isFree: baseAmount === 0 ? true : false,
            eventAmountInfo: {
                numberOfTicketsForAdults: numberOfTicketsForAdults || 0,
                numberOfTicketsForChildren: numberOfTicketsForChildren || 0,
                tier: tier || '',
                taxInfo: [{ taxName: 'GST', taxPercentage: 18 }],
                baseAmount: baseAmount,
                totalAmount: totalAmount,
                discountedAmount: 0,
                isPaid: false,
                paidAmount: 0,
                pendingAmount: totalAmount,
                totalInstallments: args.bookingInput.totalInstallments || 0,
            },
        });

        try {
            let returnedNewBooking = await newBooking.save();

            let eventsBooking = await Event.findOne({ _id: '5e92ff22aac0a018247e230b' });
            eventsBooking.attendees.push(returnedNewBooking._id);
            eventsBooking.save();

            let usersBooking = await User.findById('5e904ee796f04a0948c1c14c');
            usersBooking.bookedEvents.push(returnedNewBooking._id);
            usersBooking.save();

            return transformBooking(returnedNewBooking);
        } catch (error) {
            throw error;
        }
    },
    cancelBooking: async (args) => {
        try {
            let cancelledBooking = await Booking.findByIdAndDelete(args.bookingId);
            let cancelledBookingEvent = await Event.findById(cancelledBooking.eventId);
            cancelledBookingEvent.attendees.pull(args.bookingId);
            cancelledBookingEvent.save();

            let cancelledBookingUser = await User.findById(cancelledBooking.attendeeId);
            cancelledBookingUser.bookedEvents.pull(args.bookingId);
            cancelledBookingUser.save();

            return transformBooking(cancelledBooking);
        } catch (error) {
            throw error;
        }
    },
    transferBooking: async (args) => {
        try {
            const transferedBooking = await Booking.findById(args.bookingId);
            const transferedFromUser = await User.findById(transferedBooking.attendeeId);
            transferedFromUser.bookedEvents.pull(args.bookingId);
            await transferedFromUser.save();

            const transferedToUser = await User.findById(args.userId);
            transferedToUser.bookedEvents.push(args.bookingId);
            await transferedToUser.save();

            transferedBooking.attendeeId = args.userId;
            await transferedBooking.save();

            return transformBooking(transferedBooking);
        } catch (error) {
            throw error;
        }
    },
    addBookingAmountInfo: async (args) => {},
};
