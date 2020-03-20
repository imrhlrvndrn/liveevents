const Events = require("../../models/Events");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");

// All the resolvers
const userResolver = require("./user");
const eventResolver = require("./event");

module.exports = {
    ...userResolver,
    ...eventResolver
};
