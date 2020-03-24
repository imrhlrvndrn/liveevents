const Events = require("../../models/Event");

// All the resolvers
const userResolver = require("./userResolver");
const eventResolver = require("./eventResolver");

module.exports = {
    ...userResolver,
    ...eventResolver
};
