const Event = require("../../models/Event");
const User = require("../../models/User");
const Organization = require("../../models/Organization");
const {
  transformEvent,
  deleteAllAttendeesOfEvent,
  deleteAllSpeakersOfEvent,
} = require("../helpers/helper");

module.exports = {
  events: async () => {
    const events = await Event.find({});

    return events.map((savedEvent) => {
      return transformEvent(savedEvent);
    });
  },
  createEvent: async (args) => {
    const newEvent = new Event({
      entity: "event",
      creator: "5e904ee796f04a0948c1c14c",
      title: args.eventInput.title,
      summary: args.eventInput.summary || "",
      slugUri: args.eventInput.title.toLowerCase().split(" ").join("-"),
      description: args.eventInput.description,
      category: args.eventInput.category,
      startDate: args.eventInput.startDate,
      endDate: args.eventInput.endDate,
      reportingTime: args.eventInput.reportingTime,
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

      const eventUser = await User.findById("5e904ee796f04a0948c1c14c");

      eventUser.createdEvents.push(savedNewEvent._id);
      eventUser.save();

      return transformEvent(savedNewEvent);
      // return "savedNewEvent";
    } catch (error) {
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
          args.updateEventInput.streetAddress1 ||
          eventToBeUpdated.venue.streetAddress1,
        streetAddress2:
          args.updateEventInput.streetAddress2 ||
          eventToBeUpdated.venue.streetAddress2,
        state: args.updateEventInput.state || eventToBeUpdated.venue.state,
        city: args.updateEventInput.city || eventToBeUpdated.venue.city,
        pincode:
          args.updateEventInput.pincode || eventToBeUpdated.venue.pincode,
        country:
          args.updateEventInput.country || eventToBeUpdated.venue.country,
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
  deleteEvent: async (args) => {
    const deletedEvent = await Event.findByIdAndDelete(args.eventId);

    const creator = await User.findById(deletedEvent.creator);
    creator.createdEvents.pull(args.eventId);
    await creator.save();

    deleteAllAttendeesOfEvent(deleteEvent.attendees);
    deleteAllSpeakersOfEvent(deleteEvent.speakers);

    return transformEvent(deletedEvent);
  },
  addValidPromocodes: async (args) => {
    const eventToBeUpdated = await Event.findById(args.eventId);
    const filteredPromocode = eventToBeUpdated.validPromocodes.map((code) => {
      return code.promocode.toLowerCase();
    });
    if (
      !filteredPromocode.includes(
        args.validPromocodeInput.promocode.toLowerCase()
      )
    ) {
      eventToBeUpdated.validPromocodes.push(args.validPromocodeInput);
      await eventToBeUpdated.save();
      return "Promocode added successfully";
    }
    return `Promocode ${args.validPromocodeInput.promocode} already exists with discount of ${args.validPromocodeInput.discount}%`;
  },
  updateValidPromocodes: async (args) => {
    const eventToBeUpdated = await Event.findById(args.eventId);

    const code = eventToBeUpdated.validPromocodes.id(
      args.updateValidPromocodeInput._id
    );
    if (args.updateValidPromocodeInput.promocode != undefined)
      code["promocode"] = args.updateValidPromocodeInput.promocode;
    if (args.updateValidPromocodeInput.discount != undefined)
      code["discount"] = args.updateValidPromocodeInput.discount;
    await eventToBeUpdated.save();

    return "Promocode updated successfully!";
  },
  addEventPricing: async (args) => {
    const newPricingTier = {
      tier: args.pricingInput.tier,
      amount: args.pricingInput.amount,
      isBestSeller: args.pricingInput.isBestSeller || false,
      deliverables: [...args.pricingInput.deliverables],
      totalTickets: args.pricingInput.totalTickets,
      soldTickets: 0,
      pendingTickets: args.pricingInput.totalTickets,
    };

    try {
      let returnedEvent = await Event.findById(args.eventId);
      const filteredPricing = returnedEvent.pricing.filter((event) => {
        return event.tier === newPricingTier.tier;
      });
      if (filteredPricing)
        throw new Error(
          `Pricing tier ${newPricingTier.tier.toUpperCase()} already exists`
        );

      returnedEvent.pricing.push(newPricingTier);
      await returnedEvent.save();

      return "Added new pricing tier";
    } catch (error) {
      throw error;
    }
  },
  updateEventPricing: async (args) => {
    const eventToBeUpdated = await Event.findById(args.eventId);
    const pricingToBeUpdated = eventToBeUpdated.pricing.id(
      args.updatePricingInput._id
    );
    if (args.updatePricingInput.tier !== undefined) {
      pricingToBeUpdated["tier"] = args.updatePricingInput.tier;
    }
    if (args.updatePricingInput.amount !== undefined) {
      pricingToBeUpdated["amount"] = args.updatePricingInput.amount;
    }
    if (args.updatePricingInput.deliverables !== undefined) {
      pricingToBeUpdated["deliverables"] = [
        ...pricingToBeUpdated.deliverables,
        ...args.updatePricingInput.deliverables,
      ];
    }
    if (args.updatePricingInput.isBestSeller !== undefined) {
      pricingToBeUpdated["isBestSeller"] = args.updatePricingInput.isBestSeller;
    }
    if (args.updatePricingInput.totalTickets !== undefined) {
      pricingToBeUpdated["totalTickets"] = args.updatePricingInput.totalTickets;
    }
    if (args.updatePricingInput.soldTickets !== undefined) {
      pricingToBeUpdated["soldTickets"] = args.updatePricingInput.soldTickets;
    }
    if (args.updatePricingInput.pendingTickets !== undefined) {
      pricingToBeUpdated["pendingTickets"] =
        args.updatePricingInput.pendingTickets;
    }

    await eventToBeUpdated.save();

    return "Pricing tier updated successfully!";
  },
  transferToUser: async (args) => {
    const returnedEvent = await Event.findById(args.eventId);
    if (!returnedEvent) throw new Error("No event found!");
    const transferFromUser = await User.findById(returnedEvent.creator);
    if (!transferFromUser) {
      const transferFromOrganization = await Organization.findById(
        returnedEvent.creator
      );

      if (!transferFromOrganization)
        throw new Error("No such user/organization found!");
    }
    const transferToUser = await User.findById(args.userId);
    if (!transferToUser) throw new Error("No such user found!");

    try {
      returnedEvent.creator = args.userId;
      await returnedEvent.save();

      if (transferFromUser) {
        transferFromUser.createdEvents.pull(args.eventId);
        await transferFromUser.save();
      } else {
        transferFromOrganization.createdEvents.pull(args.eventId);
        await transferFromOrganization.save();
      }

      transferToUser.createdEvents.push(args.eventId);
      await transferToUser.save();

      return transformEvent(returnedEvent);
    } catch (error) {
      throw error;
    }
  },
  transferToOrganization: async (args) => {
    const returnedEvent = await Event.findById(args.eventId);
    if (!returnedEvent) throw new Error("No event found!");
    const transferFromUser = await User.findById(returnedEvent.creator);
    if (!transferFromUser) {
      const transferFromOrganization = await Organization.findById(
        returnedEvent.creator
      );

      if (!transferFromOrganization)
        throw new Error("No such user/organization found!");
    }
    const transferToOrganization = await Organization.findById(
      args.organizationId
    );

    if (!transferToOrganization) throw new Error("No such user found!");

    try {
      returnedEvent.creator = args.organizationId;
      await returnedEvent.save();

      if (transferFromUser) {
        transferFromUser.createdEvents.pull(args.eventId);
        await transferFromUser.save();
      } else {
        transferFromOrganization.createdEvents.pull(args.eventId);
        await transferFromOrganization.save();
      }

      transferToOrganization.createdEvents.push(args.eventId);
      await transferToOrganization.save();

      return transformEvent(returnedEvent);
    } catch (error) {
      throw error;
    }
  },
};
