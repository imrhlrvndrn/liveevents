const Event = require("../../models/Event");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { transformUser, getUserById } = require("../helpers/helper");

module.exports = {
    users: async () => {
        const returnedUsers = await User.find({});
        return returnedUsers.map((singleUser) => {
            return transformUser(singleUser);
        });
    },
    user: async (args) => {
        getUserById(args.id);
    },
    createUser: async (args) => {
        try {
            // Check if user already exists
            const userExists = await User.findOne({ username: args.userInput.username });
            if (userExists) throw new Error("Username already exists");

            // Check if user already exists
            const userEmailExists = await User.findOne({ "email.email": args.userInput.email });
            if (userEmailExists) throw new Error("Email already exists");

            // Hash the password
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(args.userInput.password, salt);

            // Create the user
            const newUser = new User({
                entity: "user",
                username: args.userInput.username,
                email: {
                    isVerified: false,
                    email: args.userInput.email,
                },
                password: hashedPassword,
                fullName: args.userInput.fullName,
                designation: args.userInput.designation || "",
                companyName: args.userInput.companyName || "",
                birthDate: args.userInput.birthDate,
                gender: args.userInput.gender,
                address: {
                    streetAddress1: args.userInput.address.streetAddress1 || "",
                    streetAddress2: args.userInput.address.streetAddress2 || "",
                    state: args.userInput.address.state || "",
                    city: args.userInput.address.city || "",
                    pincode: args.userInput.address.pincode || "",
                    country: args.userInput.address.country || "",
                },
                billingAddress: {
                    streetAddress1: args.userInput.billingAddress.streetAddress1 || "",
                    streetAddress2: args.userInput.billingAddress.streetAddress1 || "",
                    state: args.userInput.billingAddress.state || "",
                    city: args.userInput.billingAddress.city || "",
                    pincode: args.userInput.billingAddress.pincode || "",
                    country: args.userInput.billingAddress.country || "",
                },
            });

            // Save the user in the database
            const savedNewUser = await newUser.save();
            return transformUser(savedNewUser);
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (args) => {
        let user = await User.findById(args.id);
        if (!user) throw new Error("No user found!");

        if (user.fullName !== undefined) {
            user.fullName = args.fullName;
        }
        if (user.email !== undefined) {
            user.email = args.email;
        }
        if (user.username !== undefined) {
            user.username = args.username;
        }
        if (user.companyName !== undefined) {
            user.companyName = args.companyName;
        }
        if (user.designation !== undefined) {
            user.designation = args.designation;
        }
        if (user.gender !== undefined) {
            user.gender = args.gender;
        }
        if (user.age !== undefined) {
            user.age = args.age;
        }
        if (user.birthDate !== undefined) {
            user.birthDate = args.birthDate;
        }
        if (user.techStack !== undefined) {
            user.techStack = args.techStack;
        }
        if (user.links !== undefined) {
            user.links = args.links;
        }
        if (user.address !== undefined) {
            user.address = args.address;
        }
        if (user.billingAddress !== undefined) {
            user.billingAddress = args.billingAddress;
        }
    },
};
