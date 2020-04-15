const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refundSchema = new Schema(
    {
        entity: { type: String, required: true },
        eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
        bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' },
        itemType: { type: String, required: true },
        status: { type: String, required: true }, //? initiated, ongoing, denied, refunded
        reason: { type: String, required: true },
        quantityRequested: { type: Number, required: true }, //If 1 then the whole booking is claimed to be refunded, num > 1 will be the number of people the refund is initiated for
        amountToBeRefunded: { type: Number, required: true }, // Calculates the amount based on the quantityRequested
    },
    { timestamps: true }
);

module.exports = mongoose.model('Refund', refundSchema);
