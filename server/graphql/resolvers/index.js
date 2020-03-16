const Events = require("../../models/Events");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");
const {
    transformEvent,
    transformUser,
    getUserById,
    getAllBookedEventsOfUser,
    getAllCreatedEventsOfUser,
    getBookedByUsersOfEvent,
    getSpeakersOfEvent
} = require("../helpers/helper");

module.exports = {
    events: async () => {
        const events = await Events.find({});

        return events.map(savedEvent => {
            return transformEvent(event);
        });
    },
    users: async () => {
        const returnedUsers = await Users.find({});
        return returnedUsers.map(user => {
            return transformUser(user);
        });
    },
    createEvent: async args => {
        let slugArray = args.eventInput.title.toLowerCase().split(" ");
        let slugUri = slugArray.join("-");

        const newEvent = new Events({
            entity: "event",
            userId: "5e6f8375e24e551aa0d1b12d",
            title: args.eventInput.title,
            slugUri: slugUri,
            description: args.eventInput.description,
            category: args.eventInput.category,
            location: args.eventInput.location,
            country: args.eventInput.country,
            startDate: args.eventInput.startDate,
            endDate: args.eventInput.endDate,
            isPublished: false
        });

        try {
            const savedEvent = await newEvent.save();

            const eventUser = await Users.findById("5e6f8375e24e551aa0d1b12d");

            eventUser.createdEvents.push(savedEvent._id);
            eventUser.save();

            return transformEvent(savedEvent);
            // return "savedEvent";
        } catch (error) {
            throw error;
        }
    },
    createUser: async args => {
        try {
            // Check if user already exists
            const userExists = await Users.findOne({
                username: args.userInput.username
            });
            if (userExists) throw new Error("Username already exists");

            // Check if email already exists
            const userEmailExists = await Users.findOne({
                email: args.userInput.email
            });
            if (userEmailExists)
                throw new Error("Email is already registered with another account");

            // Hash the password
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(args.userInput.password, salt);

            // Create the user
            const user = new Users({
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
            const savedUser = await user.save();
            return transformUser(savedUser);
        } catch (error) {
            throw error;
        }
    }
};
