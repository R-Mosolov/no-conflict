/** This module generating CRUD-method(s) to work with DB (Google Firebase) */

// Defining variables
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./server/modules/initialize-db");

// Connecting to DB (Google Firebase)
initializeDb();
const db = firebase.firestore();

class DbManager {
  /**
   * The method creates user's test answers into DB (Google Firebase)
   * @param {string} userId - The user's name with date of creating and unique ID
   * @param {string} collName - The collection's name to record new user's data
   * @param {array} userAnswers – The user's answers that he gave on a test
   * @return
   */
  createItem(userId, collName, userAnswers) {
    db.collection("test-answers")
      .doc(userId)
      .set(
        {
          [`${collName}`]: userAnswers,
        },
        { merge: true }
      )
      .then(function () {
        console.log("Document written successfully!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}

// Exporting the module
module.exports = DbManager;
