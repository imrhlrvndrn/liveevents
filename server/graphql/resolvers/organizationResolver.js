const Organization = require("../../models/Organization");
const User = require("../../models/User");
const Event = require("../../models/Event");
const { transformOrganization } = require("../helpers/helper");

module.exports = {
  createOrganization: async (args) => {
    const newOrg = new Organization({
      owner: args.userId,
      entity: "Organization",
      name: args.organizationInput.name,
      description: args.organizationInput.description,
      image: " ",
    });

    try {
      const returnedNewOrganization = await newOrg.save();
      return transformOrganization(returnedNewOrganization);
    } catch (error) {
      throw error;
    }
  },
};
