const Events = require("../../models/Event");

// All the resolvers
const userResolver = require("./userResolver");
const eventResolver = require("./eventResolver");
const bookingResolver = require("./bookingResolver");

module.exports = {
    ...userResolver,
    ...eventResolver,
    ...bookingResolver
};
