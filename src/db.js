const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./server/modules/initialize-db");

initializeDb();
const db = firebase.firestore();

// CREATING CRUD FUNCTIONS
class DbManager {
    createItem(collName, respondentAnswers) {
        const respondentId = `respondent-${Date.now()}`;

        db.collection("test-answers")
            .doc(respondentId)
            .set({
                [`${collName}`]: respondentAnswers
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    deleteItem() {
        db.collection("hramova-answers")
            .doc("vm8ejqjweHL2EMB10zEV")
            .delete()
            .then(function() {
                console.log("Document successfully deleted!");
            })
            .catch(function(error) {
                console.error("Error removing document: ", error);
            });
    }
}

module.exports = DbManager;
