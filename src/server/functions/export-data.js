/** This module converts data from JSON to TXT format for the domain area's expert */

// Defining variables
const fs = require("fs");
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("../db");

// Connecting to DB (Google Firebase)
initializeDb();
const db = firebase.firestore();

// Converting data to TXT file
db.collection("test-answers")
  .get()
  .then((querySnapshot) => {
    const dbItems = [];

    querySnapshot.forEach((doc) => {
      dbItems.push(`${JSON.stringify(doc.data())}`);
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });

    // Saving app data to TXT file
    fs.writeFile("../data/test-answers.txt", dbItems, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
