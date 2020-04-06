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
    updateEvent: async (args) => {
        const eventToBeUpdated = await Event.findById(args.eventId);
        if (!eventToBeUpdated) throw new Error("No event found!");

        if (args.updateEventInput.title != undefined) {
            eventToBeUpdated.title = args.updateEventInput.title;
            eventToBeUpdated.slugUri = args.updateEventInput.title
                .toLowerCase()
                .split(" ")
                .join("-");
        }
        if (args.updateEventInput.summary != undefined) {
            eventToBeUpdated.summary = args.updateEventInput.summary;
        }
        if (args.updateEventInput.description != undefined) {
            eventToBeUpdated.description = args.updateEventInput.description;
        }
        if (args.updateEventInput.category != undefined) {
            eventToBeUpdated.category = args.updateEventInput.category;
        }
        if (args.updateEventInput.venue != undefined) {
            user.venue = {
                streetAddress1:
                    args.updateEventInput.streetAddress1 || eventToBeUpdated.venue.streetAddress1,
                streetAddress2:
                    args.updateEventInput.streetAddress2 || eventToBeUpdated.venue.streetAddress2,
                state: args.updateEventInput.state || eventToBeUpdated.venue.state,
                city: args.updateEventInput.city || eventToBeUpdated.venue.city,
                pincode: args.updateEventInput.pincode || eventToBeUpdated.venue.pincode,
                country: args.updateEventInput.country || eventToBeUpdated.venue.country,
            };
        }
        if (args.updateEventInput.startDate != undefined) {
            eventToBeUpdated.startDate = args.updateEventInput.startDate;
        }
        if (args.updateEventInput.endDate != undefined) {
            eventToBeUpdated.endDate = args.updateEventInput.endDate;
        }
        if (args.updateEventInput.isPublished != undefined) {
            eventToBeUpdated.isPublished = args.updateEventInput.isPublished;
        }
        if (args.updateEventInput.isInviteOnly != undefined) {
            eventToBeUpdated.isInviteOnly = args.updateEventInput.isInviteOnly;
        }
        if (args.updateEventInput.isListed != undefined) {
            eventToBeUpdated.isListed = args.updateEventInput.isListed;
        }
        if (args.updateEventInput.isAgeRestricted != undefined) {
            eventToBeUpdated.isAgeRestricted = args.updateEventInput.isAgeRestricted;
        }
        if (args.updateEventInput.capacity != undefined) {
            eventToBeUpdated.capacity = args.updateEventInput.capacity;
        }
        if (args.updateEventInput.spotsLeft != undefined) {
            eventToBeUpdated.spotsLeft = args.updateEventInput.spotsLeft;
        }
        if (args.updateEventInput.password != undefined) {
            eventToBeUpdated.password = args.updateEventInput.password;
        }

        await eventToBeUpdated.save();

        return transformEvent(eventToBeUpdated);
    },
    addValidPromocodes: async (args) => {
        const eventToBeUpdated = await Event.findById(args.eventId);
        const filteredPromocode = eventToBeUpdated.validPromocodes.filter((code) => {
            return code.promocode !== args.validPromocodeInput.promocode;
        });
        console.log(filteredPromocode);
        if (filteredPromocode.length > 0) eventToBeUpdated.validPromocodes.push(args.validPromocodeInput);

        await eventToBeUpdated.save();

        return "Promocode added successfully";
    },
};
