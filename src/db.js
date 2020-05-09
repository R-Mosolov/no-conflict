const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./server/functions/initialize-db");

initializeDb();
const db = firebase.firestore();

function createItem() {
    // Add a new user
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

module.exports = createItem;
