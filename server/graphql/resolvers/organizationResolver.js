const Organization = require('../../models/Organization');
const User = require('../../models/User');
const Event = require('../../models/Event');
const { transformOrganization } = require('../helpers/helper');

module.exports = {
    createOrganization: async (args) => {
        const newOrg = new Organization({
            owner: args.userId,
            entity: 'Organization',
            name: args.createOrganization.name,
            description: args.createOrganization.description,
            image: ' ',
        });

        try {
            const returnedNewOrganization = await newOrg.save();
            return transformOrganization(returnedNewOrganization);
        } catch (error) {
            throw error;
        }
    },
    updateOrganization: async (args) => {
        const organizationToBeUpdated = await Organization.findById(args.organizationId);

        if (args.updateOrganization.name != undefined) {
            organizationToBeUpdated.name = args.updateOrganization.name;
        }

        if (args.updateOrganization.description != undefined) {
            organizationToBeUpdated.description = args.updateOrganization.description;
        }

        if (args.updateOrganization.image != undefined) {
            organizationToBeUpdated.image = args.updateOrganization.image;
        }

        await organizationToBeUpdated.save();
        return transformOrganization(organizationToBeUpdated);
    },
    addOrganizationMember: async (args) => {
        const returnOrganization = await Organization.findById(args.organizationId);
        if (!returnOrganization) throw new Error('No organization found!');

        const newMember = {
            memberId: args.userId,
            permissions: {
                canAddAdmins: args.members.permissions.canAddAdmins || false,
                canReadAndWriteArtists: args.members.permissions.canReadAndWriteArtists || false,
                canReadAndWriteEvents: args.members.permissions.canReadAndWriteEvents || false,
            },

            isAdmin: false,
        };
    },
    updateOrganizationMember: async (args) => {
        const returnedOrganization = await Organization.findById(args.organizationId);
        if (!returnedOrganization) throw new Error('No organization found!');

        let memberToBeUpdated = returnedOrganization.members.id(args.member._id);

        memberToBeUpdated.permissions = {
            canAddAdmins:
                args.member.permissions.canAddAdmins || memberToBeUpdated.permissions.canAddAdmins,
            canReadAndWriteArtists:
                args.member.permissions.canReadAndWriteArtists ||
                memberToBeUpdated.permissions.canReadAndWriteArtists,
            canReadAndWriteEvents:
                args.member.permissions.canReadAndWriteEvents ||
                memberToBeUpdated.permissions.canReadAndWriteEvents,
        };
        memberToBeUpdated.isAdmin = args.member.isAdmin || memberToBeUpdated.isAdmin;

        await returnedOrganization.save();
        return transformOrganization(returnedOrganization);
    },
};
