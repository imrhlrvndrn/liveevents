const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        entity: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        companyName: { type: String },
        designation: { type: String },
        emails: [
            {
                isVerified: { type: Boolean, required: true },
                isPrimary: { type: Boolean, required: true },
                email: { type: String, required: true }
            }
        ],
        password: { type: String, required: true },
        age: { type: Number },
        gender: { type: String, required: true },
        birthDate: { type: Date, required: true },
        profileImg: { type: String },
        location: { type: String },
        country: { type: String, required: true },
        createdEvents: [{ type: Schema.Types.ObjectId, ref: "Events" }],
        bookedEvents: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
        techStack: [String],
        links: [
            {
                _linkType: { type: String, required: true },
                linkURI: { type: String, required: true }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
