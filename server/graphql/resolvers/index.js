const Events = require("../../models/Events");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");

// All the resolvers
const userResolver = require("./userResolver");
const eventResolver = require("./eventResolver");

module.exports = {
    ...userResolver,
    ...eventResolver
};
