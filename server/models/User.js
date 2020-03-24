const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        entity: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: {
            isVerified: { type: Boolean, required: true },
            email: { type: String, required: true, unique: true }
        },
        password: { type: String, required: true },
        fullName: { type: String, required: true },
        gender: { type: String, required: true },
        age: { type: Number },
        birthDate: { type: Date, required: true },
        companyName: { type: String },
        designation: { type: String },
        profileImg: { type: String },
        address: {
            streetAddress1: { type: String, required: true },
            streetAddress2: { type: String, required: true },
            state: { type: String, required: true },
            city: { type: String, required: true },
            pincode: { type: String, required: true },
            country: { type: String, required: true }
        },
        billingAddress: {
            streetAddress1: { type: String, required: true },
            streetAddress2: { type: String, required: true },
            state: { type: String, required: true },
            city: { type: String, required: true },
            pincode: { type: String, required: true },
            country: { type: String, required: true }
        },
        createdEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
        bookedEvents: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
        techStack: [{ type: String }],
        links: [
            {
                _linkType: { type: String, required: true },
                linkURI: { type: String, required: true }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
