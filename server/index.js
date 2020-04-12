const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const graphqlHTTP = require("express-graphql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// GraphQL imports
const graphQLSchema = require("./graphql/schema/index");
const graphQLResolver = require("./graphql/resolvers/index");

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQLSchema,
        rootValue: graphQLResolver,
        graphiql: true,
    })
);

app.post("/login", async (req, res) => {
    const theUser = await User.findOne({ "email.email": req.body.email });
    if (!theUser) res.status(404).json({ success: false, message: "Invalid credentials(email)" });

    const thePassword = await bcrypt.compare(req.body.password, theUser.password);
    if (!thePassword) res.status(401).json({ success: false, message: "Invalid credentials(p)" });

    let token;
    try {
        token = jwt.sign({ userId: theUser.id }, process.env.SECRET_TOKEN, { expiresIn: "12h" });
    } catch (error) {
        throw new Error("Something went wrong");
    }

    // Sending immutable cookie to the client
    res.cookie("access_token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 604800,
    });

    res.cookie("userId", theUser._id.toString(), {
        path: "/",
        maxAge: 604800,
    });

    res.json({ success: true, token: token, userId: theUser._id });
});

app.listen(port, () => console.log(`Server started on port ${port}`));

mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        console.log("MongoDB connection established")
    )
    .catch((err) => console.log(err));
