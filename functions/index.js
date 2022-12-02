const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IFfVdATM72ldvN0WnR98WxmMeZ0XHpzAcQAo4PxYjXL53onKyJtmsR153iiH300uULqkquv755Zf4kltedbFxzR00Xn3pAud6");

//API

//- App config
const app = express();

//- Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//- API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get('/Khoi',(request, response) => response.status(200).send("Hello Khoi"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    //Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//- Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-database/us-central1/api