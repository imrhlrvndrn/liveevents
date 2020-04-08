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
                links: {
                    instagram: "",
                    youtube: "",
                    linkedin: "",
                    twitter: "",
                    vimeo: "",
                    whatsapp: "",
                    facebook: "",
                    discord: "",
                    telegram: "",
                },
            });

            // Save the user in the database
            const savedNewUser = await newUser.save();
            return transformUser(savedNewUser);
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (args) => {
        const deletedUser = await User.findByIdAndDelete(args.userId);
        return transformUser(deletedUser);
    },
    updateUser: async (args) => {
        let user = await User.findById(args.updateUserInput.id);
        if (!user) throw new Error("No user found!");
        const userEmailExists = await User.findOne({
            "email.email": args.updateUserInput.email,
        });
        if (userEmailExists) throw new Error("This email is linked with other account");

        const usernameExists = await User.findOne({ username: args.updateUserInput.username });
        if (usernameExists) throw new Error("Username already exists");

        if (args.updateUserInput.fullName !== undefined) {
            user.fullName = args.updateUserInput.fullName;
        }
        if (args.updateUserInput.email !== undefined) {
            user.email.email = args.updateUserInput.email;
        }
        if (args.updateUserInput.username !== undefined) {
            user.username = args.updateUserInput.username;
        }
        if (args.updateUserInput.companyName !== undefined) {
            user.companyName = args.updateUserInput.companyName;
        }
        if (args.updateUserInput.designation !== undefined) {
            user.designation = args.updateUserInput.designation;
        }
        if (args.updateUserInput.gender !== undefined) {
            user.gender = args.updateUserInput.gender;
        }
        if (args.updateUserInput.age !== undefined) {
            user.age = args.updateUserInput.age;
        }
        if (args.updateUserInput.birthDate !== undefined) {
            user.birthDate = args.updateUserInput.birthDate;
        }
        if (args.updateUserInput.techStack !== undefined) {
            let filteredTechStack = [];
            const userStack = user.techStack.map((item) => {
                return item.toLowerCase();
            });
            args.updateUserInput.techStack.forEach((stack) => {
                if (!userStack.includes(stack.toLowerCase())) {
                    filteredTechStack.push(stack);
                }
            });
            user.techStack = [...user.techStack, ...filteredTechStack];
        }
        if (args.updateUserInput.links !== undefined) {
            user.links = {
                instagram: args.updateUserInput.links.instagram || user.links.instagram,
                youtube: args.updateUserInput.links.youtube || user.links.youtube,
                linkedin: args.updateUserInput.links.linkedin || user.links.linkedin,
                twitter: args.updateUserInput.links.twitter || user.links.twitter,
                vimeo: args.updateUserInput.links.vimeo || user.links.vimeo,
                whatsapp: args.updateUserInput.links.whatsapp || user.links.whatsapp,
                facebook: args.updateUserInput.links.facebook || user.links.facebook,
                discord: args.updateUserInput.links.discord || user.links.discord,
                telegram: args.updateUserInput.links.telegram || user.links.telegram,
            };
        }
        if (args.updateUserInput.address !== undefined) {
            user.address = {
                streetAddress1:
                    args.updateUserInput.address.streetAddress1 || user.address.streetAddress1,
                streetAddress2:
                    args.updateUserInput.address.streetAddress2 || user.address.streetAddress2,
                state: args.updateUserInput.address.state || user.address.state,
                city: args.updateUserInput.address.city || user.address.city,
                pincode: args.updateUserInput.address.pincode || user.address.pincode,
                country: args.updateUserInput.address.country || user.address.country,
            };
        }
        if (args.updateUserInput.billingAddress !== undefined) {
            user.billingAddress = {
                streetAddress1:
                    args.updateUserInput.billingAddress.streetAddress1 ||
                    user.billingAddress.streetAddress1,
                streetAddress2:
                    args.updateUserInput.billingAddress.streetAddress2 ||
                    user.billingAddress.streetAddress2,
                state: args.updateUserInput.billingAddress.state || user.billingAddress.state,
                city: args.updateUserInput.billingAddress.city || user.billingAddress.city,
                pincode: args.updateUserInput.billingAddress.pincode || user.billingAddress.pincode,
                country: args.updateUserInput.billingAddress.country || user.billingAddress.country,
            };
        }

        await user.save();

        return transformUser(user);
    },
};
