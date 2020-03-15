const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        entity: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        companyName: { type: String },
        designation: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImg: { type: String },
        location: { type: String },
        country: { type: String, required: true },
        createdEvents: [{ type: Schema.Types.ObjectId, ref: "Events" }],
        bookedEvents: [{ type: Schema.Types.ObjectId, ref: "Events" }],
        techStack: [String],
        links: [{ _linkType: { type: String }, linkURI: { type: String } }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
