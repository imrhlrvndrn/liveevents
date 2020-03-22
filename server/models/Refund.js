const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refundSchema = new Schema({
    entity: { type: String, required: true },
    eventId: { type: Schema.Types.ObjectId, ref: "Events" },
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking" },
    itemType: { type: String, required: true },
    status: { type: String, required: true },
    reason: { type: String, required: true },
    quantityRequested: { type: Number, required: true },
    amountToBeRefunded: { type: Number, required: true }
});

module.exports = mongoose.model("Refund", refundSchema);
