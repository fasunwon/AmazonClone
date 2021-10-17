const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51JlGwWJmJLf2KP0FhKY4KyTAuqZKIBAFYSsScbWeb682CiQy69QxOcevairqKTXyyS0n5R3rZ7yRECxc9g3EL1Af00J541DyAk");
// Setup API
// app config
const app = express();
// middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello, this is the API"));
app.post("/payments/create", async (req, res)=>{
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "CAD",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
