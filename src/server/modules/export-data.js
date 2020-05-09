const fs = require("fs");
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./initialize-db");

initializeDb();
const db = firebase.firestore();

// Check collection workability
db.collection("users").get().then((querySnapshot) => {
    const dbItems = [];

    querySnapshot.forEach((doc) => {
        dbItems.push(`${JSON.stringify(doc.data())}`);
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });

    // Saving app data to TXT file
    fs.writeFile("./data/hramova-answers.txt", dbItems, function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
    });
});
