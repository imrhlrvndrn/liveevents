const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User{
        _id: ID!
        entity: String!
        username: String!
        fullName: String!
        companyName: String
        designation: String
        email: String!
        password: String
        profileImg: String
        location: String
        country: String!
        createdEvents: [Event!]!
        bookedEvents: [Event!]!
        techStack: [String]
        links: [Links]
        createdAt: String!
        updatedAt: String!
    }
    
    input UserInput{
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

    type Event{
        _id: ID!
        entity: String!
        slugUri: String!
        userId: User!
        title: String!
        description: String!
        category: String!
        location: String
        country: String!
        isPublished: Boolean!
        heroImages: [HeroImages!]!
        startDate: String!
        endDate: String!
        speakers: [User!]!
        bookedBy: [User!]!
        pricing: [Pricing!]!
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
        isBestSeller: Boolean
    }

    input PricingInput{
        tier: String!
        amount: Float!
        deliverables: [String!]
        isBestSeller: Boolean
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
