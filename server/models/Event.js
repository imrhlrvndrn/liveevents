const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
    {
        entity: { type: String, required: true },
        slugUri: { type: String },
        creator: { type: Schema.Types.ObjectId, ref: 'User' },
        title: { type: String, required: true },
        summary: { type: String },
        description: { type: String, required: true },
        category: { type: String, required: true },
        venue: {
            streetAddress1: { type: String, required: true },
            streetAddress2: { type: String, required: true },
            state: { type: String, required: true },
            city: { type: String, required: true },
            pincode: { type: String, required: true },
            country: { type: String, required: true },

            //todo Add lattitude and longitude fields
        },
        heroImages: [
            {
                imgUrl: { type: String, required: true },
                alt: { type: String, required: true },
                thumbnail: { type: String, required: true },
            },
        ],
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        reportingTime: { type: String, required: true },
        artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
        attendees: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
        pricing: [
            {
                tier: { type: String, required: true },
                amount: { type: Number, required: true },
                deliverables: [String],
                isBestSeller: Boolean,
                totalTickets: { type: Number, required: true },
                soldTickets: { type: Number, required: true },
                pendingTickets: { type: Number, required: true },
                minimum_quantity: { type: Number, required: true },
                maximum_quantity: { type: Number, required: true },
                isFree: { type: Boolean, required: true }, // The tier is free or not
            },
        ],
        isPublished: { type: Boolean, required: true },
        isListed: { type: Boolean, required: true }, // if `true` the event is listed on the homepage and is searchable
        isInviteOnly: { type: Boolean, required: true }, // is private and inviteOnly event
        isAgeRestricted: { type: Number, required: true }, // age restriction to the event venue
        password: { type: String }, //if `true` the event is private
        capacity: { type: Number, required: true }, // total capacity of attendees
        spotsLeft: { type: Number, required: true },
        validPromocodes: [
            {
                promocode: { type: String },
                discount: { type: Number },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Event', eventsSchema);
