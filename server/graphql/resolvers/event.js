const Events = require("../../models/Events");
const Users = require("../../models/Users");
const { transformEvent } = require("../helpers/helper");

module.exports = {
    events: async () => {
        const events = await Events.find({});

        return events.map(savedEvent => {
            return transformEvent(savedEvent);
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
            const savedNewEvent = await newEvent.save();
            console.log(savedNewEvent);

            const eventUser = await Users.findById("5e6f8375e24e551aa0d1b12d");

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
