const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
    entity: { type: String, required: true },
    eventId: { type: Schema.Types.ObjectId, ref: "Events" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    isFree: { type: Boolean, required: true },
    genre: [{ type: String }],
    speakerAmountInfo: {
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
});

module.exports = mongoose.model("Speaker", speakerSchema);
