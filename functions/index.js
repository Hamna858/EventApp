/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addVenue = functions.https.onRequest(async (req, res) => {
  try {
    const {name, location, minGuests, maxGuests, rate} = req.body;

    // Add venue to Firestore
    const venueRef = admin.firestore().collection("venues").doc();
    await venueRef.set({
      name,
      location,
      minGuests,
      maxGuests,
      rate,
    });

    return res.status(200).json({success: true});
  } catch (error) {
    console.error("Error adding venue:", error.message);
    return res.status(500).json({error: "Internal Server Error"});
  }
});
