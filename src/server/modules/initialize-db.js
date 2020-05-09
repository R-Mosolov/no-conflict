const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

function initializeDb() {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "no-conflict",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    });
}

module.exports = initializeDb;
