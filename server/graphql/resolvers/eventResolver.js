const Event = require("../../models/Event");
const User = require("../../models/User");
const { transformEvent } = require("../helpers/helper");

module.exports = {
    events: async () => {
        const events = await Event.find({});
        // console.log(events);

        return events.map(savedEvent => {
            return transformEvent(savedEvent);
        });
    },
    createEvent: async args => {
        const newEvent = new Event({
            entity: "event",
            creator: "5e80aa6a9e568c50a0e65faa",
            title: args.eventInput.title,
            summary: args.eventInput.summary || "",
            slugUri: args.eventInput.title
                .toLowerCase()
                .split(" ")
                .join("-"),
            description: args.eventInput.description,
            category: args.eventInput.category,
            startDate: args.eventInput.startDate,
            endDate: args.eventInput.endDate,
            isPublished: false,
            isListed: false,
            isInviteOnly: false,
            isAgeRestricted: false,
            password: args.eventInput.password || "",
            capacity: args.eventInput.capacity,
            spotsLeft: args.eventInput.capacity,
            address: {
                streetAddress1: args.eventInput.address.streetAddress1 || "",
                streetAddress2: args.eventInput.address.streetAddress2 || "",
                state: args.eventInput.address.state || "",
                city: args.eventInput.address.city || "",
                pincode: args.eventInput.address.pincode || "",
                country: args.eventInput.address.country || ""
            }
        });

        try {
            const savedNewEvent = await newEvent.save();
            console.log(savedNewEvent);

            const eventUser = await User.findById("5e80aa6a9e568c50a0e65faa");

            eventUser.createdEvents.push(savedNewEvent._id);
            eventUser.save();

            return transformEvent(savedNewEvent);
            // return "savedNewEvent";
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};
