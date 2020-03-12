const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User{
        _id: ID!
        entity: String!
        username: String!
        name: Name!
        email: String!
        password: String!
        profileImg: String
        location: String!
        country: String!
        createdEvents: [Event!]
        bookedEvents: [Event!]
        techStack: [String]
        links: Links
    }
    
    input UserInput{
        entity: String!
        username: String!
        name: Name!
        email: String!
        password: String!
        profileImg: String
        location: String!
        country: String!
        createdEvents: [Event!]
        bookedEvents: [Event!]
        techStack: [String]
        links: Links
    }

    type Name {
        firstname: String!
        lastname: String!
    }

    type Links {
        email: String
        website: String
        linkedin: String
        facebook: String
        instagram: String
        twitter: String
        github: String
        tiktok: String
        telegram: String
        discord: String
        pinterest: String
    }

    type Event{
        _id: ID!
        entity: String!
        slugUri: String!
        userId: User!
        title: String!
        description: String!
        category: String!
        location: String!
        country: String!
        heroImages: [HeroImages!]!
        startDate: String!
        endDate: String!
        speakers: [User!]
        bookedBy: [User!]
        pricing: [Pricing!]!
    }

    input EventInput {
        entity: String!
        slugUri: String!
        title: String!
        description: String!
        category: String!
        location: String!
        country: String!
        heroImages: [HeroImages!]!
        startDate: String!
        endDate: String!
        speakers: [User!]
        bookedBy: [User!]
        pricing: [Pricing!]!
    }

    type HeroImages {
        imgUrl: String!
        alt: String!
        thumbnail: String!
    }

    type Pricing {
        tier: String!
        amount: Float!
        deliverables: [String!],
        isBestSeller: Boolean
    }

    type RootQuery {
        events: [Event!]!
        event(title: String!): Event!
        user(id: ID!): User!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event!
        createUser(userInput: UserInput): User!
    }
`);
