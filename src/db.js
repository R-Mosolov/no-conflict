const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./server/modules/initialize-db");

initializeDb();
const db = firebase.firestore();

// CREATING CRUD FUNCTIONS
class DbManager {
  createItem(userId, collName, userAnswers) {
    db.collection("test-answers")
      .doc(userId)
      .set({
          [`${collName}`]: userAnswers,
        }, { merge: true })
      .then(function () {
        console.log("Document written successfully!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  readItem(userId) {
    db.collection("test-answers")
      .doc(userId)
      .get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  updateItem(userId, collName, userAnswers) {
    db.collection("test-answers")
      .doc(userId)
      .update(
        {
          [`${collName}`]: userAnswers,
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }

  deleteItem() {
    db.collection("hramova-answers")
      .doc("vm8ejqjweHL2EMB10zEV")
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  }
}

module.exports = DbManager;
