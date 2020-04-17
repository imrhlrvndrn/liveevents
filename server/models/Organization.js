const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationResolver = new Schema({
    entity: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    createdEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    members: [
        {
            memberId: { type: Schema.Types.ObjectId, ref: 'User' },
            permissions: {
                canAddAdmins: { type: Boolean, required: true },
                canReadAndWriteArtists: { type: Boolean, required: true },
                canReadAndWriteEvents: { type: Boolean, required: true },
            },

            isAdmin: { type: Boolean, required: true },
        },
    ],
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Organization', organizationResolver);
