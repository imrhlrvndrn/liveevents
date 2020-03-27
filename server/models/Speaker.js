const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema(
    {
        entity: { type: String, required: true },
        eventId: { type: Schema.Types.ObjectId, ref: "Event" },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        isFree: { type: Boolean, required: true },
        genre: [{ type: String }],
        topic: [{ type: String }],
        speakerAmountInfo: {
            numberOfTicketsForAdults: { type: Number },
            numberOfTicketsForChildren: { type: Number },
            tier: { type: String },
            baseAmount: { type: Number, required: true },
            taxInfo: [
                {
                    taxName: { type: String, required: true },
                    taxAmount: { type: Number, required: true }
                }
            ],
            totalAmount: { type: Number, required: true },
            discountedAmount: { type: Number }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Speaker", speakerSchema);
