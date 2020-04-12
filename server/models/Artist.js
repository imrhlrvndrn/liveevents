const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
    {
        entity: { type: String, required: true },
        eventId: { type: Schema.Types.ObjectId, ref: "Event" },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        type: { type: String, required: true }, // musician, coder, DJ
        isFree: { type: Boolean, required: true }, // performance is free or not
        isHidden: { type: Boolean, required: true }, // visibility of the artist is hidden or not
        genres: [{ type: String }],
        topics: [{ type: String }],
        sort_order: { type: Number, required: true }, // The order of performance
        role: { type: String, required: true },
        speakerAmountInfo: {
            numberOfTicketsForAdults: { type: Number },
            numberOfTicketsForChildren: { type: Number },
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
    },
    { timestamps: true }
);

module.exports = mongoose.model("Artist", artistSchema);
