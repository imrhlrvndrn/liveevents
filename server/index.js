const express = require("express");
const cors = require("cors");
require("dotenv").config();
const CookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");

// GraphQL imports
const graphQLSchema = require("./graphql/schema/index.js");
const graphQLResolver = require("./graphql/resolvers/index.js");

const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQLSchema,
        rootValue: graphQLResolver,
        graphiql: true
    })
);

app.listen(port, () => console.log(`Server started on port ${port}`));

mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        console.log("MongoDB connection established")
    )
    .catch(err => console.log(err));
