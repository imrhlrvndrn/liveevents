const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
    {
        entity: { type: String, required: true },
        slugUri: { type: String },
        creator: { type: Schema.Types.ObjectId, ref: "Users" },
        title: { type: String, required: true },
        summary: { type: String },
        description: { type: String, required: true },
        category: { type: String, required: true },
        address: {
            streetAddress1: { type: String, required: true },
            streetAddress2: { type: String, required: true },
            state: { type: String, required: true },
            city: { type: String, required: true },
            pincode: { type: String, required: true },
            country: { type: String, required: true }
        },
        heroImages: [
            {
                imgUrl: { type: String, required: true },
                alt: { type: String, required: true },
                thumbnail: { type: String, required: true }
            }
        ],
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        speakers: [{ type: Schema.Types.ObjectId, ref: "Speaker" }],
        attendees: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
        pricing: [
            {
                tier: { type: String, required: true },
                amount: { type: Number, required: true },
                deliverables: [String],
                isSelected: { type: Boolean, required: true },
                isBestSeller: Boolean,
                totalTickets: { type: Number, required: true },
                soldTickets: { type: Number, required: true },
                pendingTickets: { type: Number, required: true }
            }
        ],
        isPublished: { type: Boolean, required: true },
        isListed: { type: Boolean, required: true },
        isInviteOnly: { type: Boolean, required: true },
        password: { type: String },
        capacity: { type: Number, required: true },
        spotsLeft: { type: Number, required: true },
        validPromocodes: [
            {
                promocode: { type: String },
                discount: { type: Number }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Events", eventsSchema);
