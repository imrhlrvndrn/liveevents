const Events = require("../../models/Events");
const Users = require("../../models/Users");

module.exports = {
    events: async () => {
        const events = await Events.find();
        // return events.map(event => {
        //     return {
        //         ...event._doc,
        //         _id: event.id,
        //         userId: User,
        //         startDate: new Date(event.startDate).toString(),
        //         endDate: new Date(event.endDate).toString()
        // speakers: [User],
        // bookedBy: [User]
        //     };
        // });

        return events;
    },
    createEvent: async args => {
        const newEvent = new Events({
            entity: args.eventInput.entity,
            title: args.eventInput.title,
            description: args.eventInput.description,
            category: args.eventInput.category,
            location: args.eventInput.location,
            country: args.eventInput.country,
            startDate: args.eventInput.startDate,
            endDate: args.eventInput.endDate,
            isPublished: false
        });

        try {
            await newEvent.save();

            return "savedEvent";
        } catch (error) {
            throw error;
        }
    }
};
