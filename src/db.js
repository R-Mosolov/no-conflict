const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
var fs = require('fs');


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

var db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//
// // Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });

// Check collection workability
db.collection("users").get().then((querySnapshot) => {
    const dbItems = [];

    querySnapshot.forEach((doc) => {
        dbItems.push(`${JSON.stringify(doc.data())}`);
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });

    // writeFile function with filename, content and callback function
    fs.writeFile('data.txt', dbItems, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});
