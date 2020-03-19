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
        age: Integer
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
        location: String
        country: String
        createdEvents: [Event!]
        bookedEvents: [Event!]
        refundId: [Refund!]
        techStack: [String]
        links: [Links]
        createdAt: String!
        updatedAt: String!
    }

    type Emails {
        _id: ID!
        isVerified: Boolean!
        isPrimary: Boolean!
        email: String!
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
        age: Integer
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
        booking: Booking!
        refundId: [Refund!]
        links: [Links]

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
        speakers: [User!]
        attendees: [User!]
        pricing: [Pricing!]
        isPublished: Boolean!
        isListed: Boolean!
        inviteOnly: Boolean!
        password: String
        capacity: Integer!
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
        deliverables: [String!]
        isSelected: Boolean!
        isBestSeller: Boolean
        totalTickets: Integer!
        soldTickets: Integer!
        pendingTickets: Integer!
    }

    input PricingInput{
        tier: String!
        amount: Float!
        deliverables: [String!]
        isBestSeller: Boolean
    }

    type Booking{
        _id: ID!
        eventId: Event!
        attendeeId: Attendee!
        promoCode: String
        quantityOfTickets: Integer!
        team: [Team!]
        bookingStatus: String
        orderAmountInfo: OrderAmountInfo!
        isFree: Boolean!
    }

    type Team {
        _id: ID!
        entity: String!
        emails: String!
        fullName: String
        gender: String!
        age: Integer
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
    }

    type OrderAmountInfo {
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
        quantityRequested: Integer! // Refund item quantity. If the itemType field value is order, quantityRequested is always 1. if the itemType field value is attendee or merchandise, then the quantityRequested value displays the number of items requested for a refund.
        amountToBeRefunded: Float! // rupees to be refunded
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
