const Event = require("../../models/Event");
const User = require("../../models/User");
const { transformEvent } = require("../helpers/helper");

module.exports = {
    events: async () => {
        const events = await Event.find({});
        // console.log(events);

        return events.map((savedEvent) => {
            return transformEvent(savedEvent);
        });
    },
    createEvent: async (args) => {
        const newEvent = new Event({
            entity: "event",
            creator: "5e8a0b2192747413e043404f",
            title: args.eventInput.title,
            summary: args.eventInput.summary || "",
            slugUri: args.eventInput.title.toLowerCase().split(" ").join("-"),
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
            venue: {
                streetAddress1: args.eventInput.venue.streetAddress1 || "",
                streetAddress2: args.eventInput.venue.streetAddress2 || "",
                state: args.eventInput.venue.state || "",
                city: args.eventInput.venue.city || "",
                pincode: args.eventInput.venue.pincode || "",
                country: args.eventInput.venue.country || "",
            },
        });

        try {
            const savedNewEvent = await newEvent.save();
            console.log(savedNewEvent);

            const eventUser = await User.findById("5e8a0b2192747413e043404f");

            eventUser.createdEvents.push(savedNewEvent._id);
            eventUser.save();

            return transformEvent(savedNewEvent);
            // return "savedNewEvent";
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
