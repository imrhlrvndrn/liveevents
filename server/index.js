const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const graphqlHTTP = require("express-graphql");

// GraphQL imports
const graphQLSchema = require("./graphql/schema/index");
const graphQLResolver = require("./graphql/resolvers/index");

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
