const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        entity: { type: String, required: true },
        eventId: { type: Schema.Types.ObjectId, ref: "Event" },
        attendeeId: { type: Schema.Types.ObjectId, ref: "User" },
        refundId: [{ type: Schema.Types.ObjectId, ref: "Refund" }],
        promocode: { type: String },
        bookingStatus: { type: String, required: true },
        isFree: { type: Boolean, required: true },
        eventAmountInfo: {
            numberOfTicketsForAdults: { type: Number, required: true },
            numberOfTicketsForChildren: { type: Number, required: true },
            tier: { type: String },
            baseAmount: { type: Number, required: true },
            taxInfo: [
                {
                    taxName: { type: String, required: true },
                    taxPercentage: { type: Number, required: true },
                },
            ],
            totalAmount: { type: Number, required: true },
            discountedAmount: { type: Number },
            isPaid: { type: Boolean, required: true },
            paidAmount: { type: Number, required: true },
            pendingAmount: { type: Number, required: true },
            totalInstallments: { type: Number, required: true },
        },
        // ! You still have to add the Team object in here
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
