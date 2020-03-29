const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
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
        createdEvents: [Event!]!
        bookedEvents: [Booking!]!
        techStack: [String]!
        links: [Link]!
        createdAt: String!
        updatedAt: String!
    }
    
    input UserInput {
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
        country: String!    }

    input AddressInput {
        streetAddress1: String
        streetAddress2: String
        state: String
        city: String
        pincode: String
        country: String
    }

    type Link {
        _linkType: String!
        linkURI: String!
    }

    type Attendee {
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
        links: [Link]!
        createdAt: String!
        updatedAt: String!
    }

    type Event {
        _id: ID!
        entity: String!
        slugUri: String
        creator: User!
        title: String!
        summary: String
        description: String!
        category: String!
        address: Address!
        heroImages: [HeroImage!]
        startDate: String!
        endDate: String!
        speakers: [Speaker!]!
        attendees: [Booking!]!
        pricing: [Pricing!]!
        isPublished: Boolean!
        isListed: Boolean!
        isInviteOnly: Boolean!
        isAgeRestricted: Boolean!
        password: String
        capacity: Float!
        spotsLeft: Float!
        validPromocodes: [ValidPromocode!]!
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

    type HeroImage {
        imgUrl: String!
        alt: String!
        thumbnail: String!
    }

    input HeroImageInput {
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

    type ValidPromocode {
        promocode: String!
        discount: Float!
    }

    type Booking {
        _id: ID!
        entity: String!
        eventId: Event!
        attendeeId: User!
        refundId: [Refund!]!
        promocode: String
        bookingStatus: String!
        eventAmountInfo: AmountInfo!
        isFree: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    input BookingInput {
        promocode: String
        isFree: Boolean
        tier: String
        eventAmountInfo: AmountInfoInput!
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
        numberOfTicketsForAdults: Float
        numberOfTicketsForChildren: Float
        tier: String
        baseAmount: Float!
        taxInfo: [TaxInfo!]!
        totalAmount: Float!
        discountedAmount: Float
    }

    input AmountInfoInput {
        numberOfTicketsForAdults: Float
        numberOfTicketsForChildren: Float
        baseAmount: Float
    }

    type TaxInfo {
        _id: ID!
        taxName: String!
        taxAmount: Float!
    }

    type Refund {
        _id: ID!
        entity: String!
        eventId: Event!
        bookingId: Booking!
        itemType: String!
        status: String!
        reason: String
        quantityRequested: Float! 
        amountToBeRefunded: Float!
        createdAt: String!
        updatedAt: String!
    }

    input RefundInput {
        itemType: String
        reason: String!
        quantityRequested: Float!
    }

    type Speaker {
        _id: ID!
        entity: String!
        eventId: Event!
        userId: User!
        isFree: Boolean!
        genre: [String!]!
        topic: [String!]!
        speakerAmountInfo: AmountInfo!
        createdAt: String!
        updatedAt: String!
    }

    input SpeakerInput {
        genre:[String!]!
        topic:[String!]!
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
        createBooking(bookingInput: BookingInput): Booking!
        createSpeaker(speakerInput: SpeakerInput): Speaker!
        createRefund(refundInput: RefundInput): Refund!
        addPricing(pricingInput: PricingInput): String!
        addHeroImages(heroImageInput: HeroImageInput): String!
        addSpeaker(id: ID!):String!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
