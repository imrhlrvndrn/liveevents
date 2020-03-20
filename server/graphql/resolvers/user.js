const Events = require("../../models/Events");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");
const { transformUser } = require("../helpers/helper");

module.exports = {
    users: async () => {
        const returnedUsers = await Users.find({});
        return returnedUsers.map(singleUser => {
            return transformUser(singleUser);
        });
    },
    createUser: async args => {
        try {
            // Check if user already exists
            const userExists = await Users.findOne({ username: args.userInput.username });
            if (userExists) throw new Error("Username already exists");

            // Check if email already exists
            const userEmailExists = await Users.findOne({ email: args.userInput.email });
            if (userEmailExists)
                throw new Error("Email is already registered with another account");

            // Hash the password
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(args.userInput.password, salt);

            // Create the user
            const newUser = new Users({
                entity: "user",
                username: args.userInput.username,
                email: args.userInput.email,
                password: hashedPassword,
                fullName: args.userInput.fullName,
                companyName: args.userInput.companyName || "",
                designation: args.userInput.designation || "",
                country: args.userInput.country
            });

            // Save the user in the database
            const savedNewUser = await newUser.save();
            return transformUser(savedNewUser);
        } catch (error) {
            throw error;
        }
    }
};
