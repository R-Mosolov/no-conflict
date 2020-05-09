const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects
const initializeDb = require("./server/modules/initialize-db");

initializeDb();
const db = firebase.firestore();

// CREATING CRUD FUNCTIONS
class DbManager {
    createItem() {
        db.collection("test-answers")
            .add({
                "hramovaAnswers": [
                    {
                        "questionName": "q1",
                        "answerName": "a1",
                        "creationDate": "01.01.2020, 23:23"
                    },
                    {
                        "questionName": "q2",
                        "answerName": "a2",
                        "creationDate": "01.01.2020, 23:23"
                    }
                ],
                "tomasKilmannAnswers": [
                    {
                        "questionName": "q1",
                        "answerName": "a1",
                        "creationDate": "01.01.2020, 23:23"
                    },
                    {
                        "questionName": "q2",
                        "answerName": "a2",
                        "creationDate": "01.01.2020, 23:23"
                    }
                ]
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
