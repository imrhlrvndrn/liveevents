const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User{
        _id: ID!
        entity: String!
        username: String!
        emails: Emails!
        password: String
        fullName: String
        gender: String!
        age: Float
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
        location: String
        country: String
        createdEvents: [Event!]!
        bookedEvents: [Booking!]!
        refundId: [Refund!]!
        techStack: [String]!
        links: [Links]!
        createdAt: String!
        updatedAt: String!
    }
    
    input UserInput {
        username: String!
        fullName: String!
        companyName: String
        desgination: String
        email: String!
        password: String!
        country: String!
    }

    type Emails {
        _id: ID!
        isVerified: Boolean!
        isPrimary: Boolean!
        email: String!
    }

    type Links {
        _linkType: String!
        linkURI: String!
    }

    type Attendee{
        _id: ID!
        entity: String!
        username: String!
        emails: Emails!
        fullName: String
        gender: String!
        age: Float
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
        booking: Booking!
        refundId: [Refund!]!
        links: [Links]!
        createdAt: String!
        updatedAt: String!
    }

    type Event{
        _id: ID!
        entity: String!
        slugUri: String
        creator: User!
        title: String!
        summary: String
        description: String!
        category: String!
        location: String
        country: String!
        heroImages: [HeroImages!]
        startDate: String!
        endDate: String!
        speakers: [User!]!
        attendees: [Attendee!]!
        pricing: [Pricing!]!
        isPublished: Boolean!
        isListed: Boolean!
        isInviteOnly: Boolean!
        password: String
        capacity: Float!
        createdAt: String!
        updatedAt: String!
    }

    input EventInput {
        title: String!
        description: String!
        category: String!
        location: String
        country: String!
        startDate: String!
        endDate: String!
    }

    type HeroImages {
        imgUrl: String!
        alt: String!
        thumbnail: String!
    }

    input HeroImagesInput {
        imgUrl: String!
        alt: String!
        thumbnail: String!
    }

    type Pricing {
        tier: String!
        amount: Float!
        deliverables: [String!]!
        isSelected: Boolean!
        isBestSeller: Boolean
        totalTickets: Float!
        soldTickets: Float!
        pendingTickets: Float!
    }

    input PricingInput{
        tier: String!
        amount: Float!
        deliverables: [String!]!
        isBestSeller: Boolean
    }

    type Booking{
        _id: ID!
        entity: String!
        eventId: Event!
        attendeeId: Attendee!
        promoCode: String
        quantityOfTickets: Float!
        team: [Team!]!
        bookingStatus: String
        eventAmountInfo: EventAmountInfo!
        isFree: Boolean!
    }

    type Team {
        _id: ID!
        entity: String!
        emails: String!
        fullName: String
        gender: String!
        age: Float
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
    }

    type EventAmountInfo {
        baseAmount: Float!
        taxInfo: [TaxInfo!]!
        totalAmount: Float!
        discountedAmount: Float
    }

    type TaxInfo {
        _id: ID!
        taxName: String!
        taxAmount: Float!
    }

    type Refund{
        _id: ID!
        eventId: Event!
        bookingId: Booking!
        itemType: String!
        status: String!
        reason: String
        quantityRequested: Float! 
        amountToBeRefunded: Float!
    }

    type RootQuery {
        events: [Event!]!
        event(title: String!): Event!
        user(id: ID!): User!
        users: [User!]!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event!
        createUser(userInput: UserInput): User!
        addPricing(pricingInput: PricingInput): String!
        addHeroImages(heroImagesInput: HeroImagesInput): String!
        addSpeaker(id: ID!):String!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
