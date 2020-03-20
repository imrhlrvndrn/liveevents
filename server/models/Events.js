const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
    {
        entity: { type: String, required: true },
        slugUri: { type: String },
        creator: { type: Schema.Types.ObjectId, ref: "Users", required: true },
        title: { type: String, required: true },
        summary: { type: String },
        description: { type: String, required: true },
        category: { type: String, required: true },
        location: { type: String, required: true },
        country: { type: String, required: true },
        isPublished: { type: Boolean, required: true },
        isListed: { type: Boolean, required: true },
        isInviteOnly: { type: Boolean, required: true },
        password: { type: String },
        capacity: { type: Number, required: true },
        heroImages: [
            {
                imgUrl: { type: String, required: true },
                alt: { type: String, required: true },
                thumbnail: { type: String, required: true }
            }
        ],
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        // ! Make the Speaker model in the GraphQL & Mongoose schema
        speakers: [{ type: Schema.Types.ObjectId, ref: "Speaker" }],
        attendees: [{ type: Schema.Types.ObjectId, ref: "Attendee" }],
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
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Events", eventsSchema);
