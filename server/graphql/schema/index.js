const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Users{
        _id: ID!
        entity: String!
        username: String!
        email: Email!
        password: String
        fullName: String!
        gender: String!
        age: Float
        birthDate: String!
        companyName: String
        designation: String
        profileImg: String
        address: Address!
        billingAddress: Address!
        createdEvents: [Events!]!
        bookedEvents: [Booking!]!
        refundId: [Refund!]!
        techStack: [String]!
        links: [Links]!
        createdAt: String!
        updatedAt: String!
    }
    
    input UsersInput {
        username: String!
        fullName: String!
        companyName: String
        designation: String
        email: String!
        password: String!
        gender: String!
        birthDate: String!
        address: AddressInput
        billingAddress: AddressInput
    }

    type Email {
        isVerified: Boolean!
        email: String!
    }

    type Address {
        streetAddress1: String!
        streetAddress2: String!
        state: String!
        city: String!
        pincode: String!
        country: String!
    }

    input AddressInput {
        streetAddress1: String
        streetAddress2: String
        state: String
        city: String
        pincode: String
        country: String
    }

    type Links {
        _linkType: String!
        linkURI: String!
    }

    type Attendee{
        _id: ID!
        entity: String!
        username: String!
        email: Email!
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

    type Events{
        _id: ID!
        entity: String!
        slugUri: String
        creator: Users!
        title: String!
        summary: String
        description: String!
        category: String!
        address: Address!
        heroImages: [HeroImages!]
        startDate: String!
        endDate: String!
        speakers: [Users!]!
        attendees: [Booking!]!
        pricing: [Pricing!]!
        isPublished: Boolean!
        isListed: Boolean!
        isInviteOnly: Boolean!
        password: String
        capacity: Float!
        spotsLeft: Float!
        validPromocodes: [ValidPromocodes!]!
        createdAt: String!
        updatedAt: String!
    }

    input EventInput {
        title: String!
        description: String!
        summary: String
        category: String!
        startDate: String!
        endDate: String!
        password: String
        capacity: Float!
        address: AddressInput!
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

    input PricingInput {
        tier: String!
        amount: Float!
        deliverables: [String!]!
        isBestSeller: Boolean
    }

    type ValidPromocodes {
        promocode: String!
        discount: Float!
    }

    type Booking{
        _id: ID!
        entity: String!
        eventId: Events!
        attendeeId: Users!
        promocode: String
        quantityOfTickets: Float!
        bookingStatus: String!
        eventAmountInfo: AmountInfo!
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

    type AmountInfo {
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
        entity: String!
        eventId: Events!
        bookingId: Booking!
        itemType: String!
        status: String!
        reason: String
        quantityRequested: Float! 
        amountToBeRefunded: Float!
    }

    type Speaker{
        _id: ID!
        entity: String!
        eventId: Events!
        userId: Users!
        isFree: Boolean!
        genre: [String!]!
        speakerAmountInfo: AmountInfo!
    }

    type RootQuery {
        events: [Events!]!
        event(title: String!): Events!
        user(id: ID!): Users!
        users: [Users!]!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Events!
        createUser(userInput: UsersInput): Users!
        addPricing(pricingInput: PricingInput): String!
        addHeroImages(heroImagesInput: HeroImagesInput): String!
        addSpeaker(id: ID!):String!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
