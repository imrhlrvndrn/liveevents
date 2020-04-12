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
        links: Link!
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
        address: AddressInput!
        billingAddress: AddressInput!
    }

    input UpdateUserInput {
        id: ID!
        username: String
        fullName: String
        companyName: String
        designation: String
        email: String
        password: String
        gender: String
        birthDate: String
        age: Float        
        techStack: [String]
        links: LinkInput
        address: UpdateAddressInput
        billingAddress: UpdateAddressInput
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
    
    input UpdateAddressInput {
        streetAddress1: String
        streetAddress2: String
        state: String
        city: String
        pincode: String
        country: String
    }

    type Link {
        instagram: String
        youtube: String
        linkedin: String
        twitter: String
        vimeo: String
        whatsapp: String
        facebook: String
        discord: String
        telegram: String
    }

    input LinkInput {
        instagram: String
        youtube: String
        linkedin: String
        twitter: String
        vimeo: String
        whatsapp: String
        facebook: String
        discord: String
        telegram: String
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
        venue: Address!
        heroImages: [HeroImage!]
        startDate: String!
        endDate: String!
        reportingTime: String!
        artists: [Artist!]!
        attendees: [Booking!]!
        pricing: [Pricing!]!
        isPublished: Boolean!
        isListed: Boolean!
        isInviteOnly: Boolean!
        isAgeRestricted: Int
        password: String
        capacity: Float!
        spotsLeft: Float!
        validPromocodes: [ValidPromocode!]!
        createdAt: String!
        updatedAt: String!
    }


    input UpdateEventInput {
        title: String
        summary: String
        description: String
        category: String
        venue: AddressInput
        startDate: String
        endDate: String
        reportingTime: String
        isPublished: Boolean
        isListed: Boolean
        isInviteOnly: Boolean
        isAgeRestricted: Boolean
        password: String
        capacity: Float
        spotsLeft: Float
        validPromocodes: [ValidPromocodeInput]
    }

    input EventInput {
        title: String!
        description: String!
        summary: String
        category: String!
        startDate: String!
        endDate: String!
        reportingTime: String!
        password: String
        capacity: Float!
        venue: AddressInput!
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

    input UpdateHeroImageInput {
        imgUrl: String
        alt: String
        thumbnail: String
    }

    type Pricing {
        tier: String!
        amount: Float!
        deliverables: [String!]!
        isBestSeller: Boolean
        totalTickets: Float!
        soldTickets: Float!
        pendingTickets: Float!
        minimum_quantity: Int!
        maximum_quantity: Int!
        isFree: Boolean!
    }

    input PricingInput {
        tier: String!
        amount: Float!
        deliverables: [String!]!
        isBestSeller: Boolean
        totalTickets: Float!
        minimum_quantity: Int
        maximum_quantity: Int
        isFree: Boolean
    }

    input UpdatePricingInput {
        _id: ID!
        tier: String
        amount: Float
        deliverables: [String]
        isBestSeller: Boolean
        totalTickets: Float!
        soldTickets: Float
        pendingTickets: Float!
        minimum_quantity: Int
        maximum_quantity: Int
        isFree: Boolean
    }

    type ValidPromocode {
        promocode: String!
        discount: Float!
    }

    input ValidPromocodeInput {
        promocode: String!
        discount: Float!
    }

    input UpdateValidPromocodeInput {
        _id: ID!
        promocode: String
        discount: Float
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
        isPaid: Boolean!
        paidAmount: Float!
        pendingAmount: Float!
        totalInstallments: Int!
    }

    input AmountInfoInput {
        numberOfTicketsForAdults: Float
        numberOfTicketsForChildren: Float
        baseAmount: Float
        isPaid: Boolean
        paidAmount: Float
        pendingAmount: Float
        totalInstallments: Int
    }

    input UpdateAmountInfoInput {
        numberOfTicketsForAdults: Float
        numberOfTicketsForChildren: Float
        tier: String
        baseAmount: Float
        taxInfo: [TaxInfoInput]
        totalAmount: Float
        discountedAmount: Float
        isPaid: Boolean
        paidAmount: Float
        pendingAmount: Float
        totalInstallments: Float
    }

    type TaxInfo {
        _id: ID!
        taxName: String!
        taxPercentage: Float!
    }

    input TaxInfoInput {
        taxName: String!
        taxPercentage: Float!
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

    type Artist {
        _id: ID!
        entity: String!
        eventId: Event!
        userId: User!
        isFree: Boolean!
        type: String!
        genres: [String!]!
        topics: [String!]!
        artistAmountInfo: AmountInfo!
        isHidden: Boolean!
        sort_order: Int!
        role: Role!
        createdAt: String!
        updatedAt: String!
    }

    input ArtistInput {
        type: String!
        genres:[String!]!
        topics:[String!]!
        isHidden: Boolean!
        sort_order: Int!
        role: Role!
    }

    input UpdateArtistInput {
        type: String
        genres:[String]
        topics:[String]
        isHidden: Boolean
        sort_order: Int
        role: Role
    }

    enum Role{
        headliner
        supporter
    }

    type RootQuery {
        events: [Event!]!
        event(title: String!): Event!
        user(id: ID!): User!
        users: [User!]!
        bookings: [Booking]!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event!
        deleteEvent(eventId: ID!): Event!
        updateEvent(eventId: ID!,updateEventInput: UpdateEventInput):Event!
        addEventPricing(eventId: ID!, pricingInput: PricingInput): String!
        updateEventPricing(eventId: ID!, updatePricingInput: UpdatePricingInput): String!
        addValidPromocodes(eventId: ID!, validPromocodeInput: ValidPromocodeInput): String!
        updateValidPromocodes(eventId: ID!, updateValidPromocodeInput: UpdateValidPromocodeInput): String!
        addEventHeroImages(eventId: ID!, heroImageInput: HeroImageInput): String!
        updateEventHeroImages(eventId: ID!, updateheroImageInput: UpdateHeroImageInput): String!

        createUser(userInput: UserInput): User!
        deleteUser(userId: ID!): String!
        updateUser(updateUserInput: UpdateUserInput): User!

        createBooking(bookingInput: BookingInput): Booking!
        cancelBooking(bookingId: ID!): Booking!
        transferBooking(bookingId: ID!, userId: ID!): Booking!
        addBookingAmountInfo(bookingId: ID!): AmountInfo!

        createArtist(artistInput: ArtistInput): Artist!

        createRefund(refundInput: RefundInput): Refund!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
