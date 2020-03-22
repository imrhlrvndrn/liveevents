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
            creator: "5e76fce2580d630170b0cbc7",
            title: args.eventInput.title,
            summary: args.eventInput.summary || "",
            slugUri: slugUri,
            description: args.eventInput.description,
            category: args.eventInput.category,
            startDate: args.eventInput.startDate,
            endDate: args.eventInput.endDate,
            isPublished: false,
            isListed: false,
            isInviteOnly: false,
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

            const eventUser = await Users.findById("5e76fce2580d630170b0cbc7");

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
