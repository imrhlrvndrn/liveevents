const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        name: {
            firstname: { type: String, required: true },
            lastname: { type: String, required: true }
        },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImg: { type: String },
        location: { type: String },
        country: { type: String },
        createdEvents: [{ type: Schema.Types.ObjectId, ref: "Events" }],
        bookedEvents: [{ type: Schema.Types.ObjectId, ref: "Events" }],
        techStack: [String],
        links: {
            email: String,
            website: String,
            linkedin: String,
            facebook: String,
            instagram: String,
            twitter: String,
            github: String,
            tiktok: String,
            telegram: String,
            discord: String,
            pinterest: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
