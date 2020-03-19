const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
    {
        entity: { type: String, required: true },
        slugUri: { type: String },
        creator: { type: Schema.Types.ObjectId, ref: "Users" },
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        location: { type: String, required: true },
        country: { type: String, required: true },
        isPublished: { type: Boolean, required: true },
        heroImages: [
            {
                imgUrl: { type: String, required: true },
                alt: { type: String, required: true },
                thumbnail: { type: String, required: true }
            }
        ],
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        speakers: [{ type: Schema.Types.ObjectId, ref: "Users" }],
        attendees: [{ type: Schema.Types.ObjectId, ref: "Users" }],
        pricing: [
            {
                tier: { type: String, required: true },
                amount: { type: Number, required: true },
                deliverables: [String],
                isSelected: { type: Boolean, required: true },
                isBestSeller: Boolean
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Events", eventsSchema);
