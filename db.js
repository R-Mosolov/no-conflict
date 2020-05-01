const { MongoClient } = require("mongodb");

// CONNECTING TO MONGODB AS PROJECT'S DATABASE
MongoClient
    .connect("mongodb://localhost:27017", (err, client) => {
        if (err) throw err;

        const db =  client.db("no-conflict");
        db.collection("test-answers")
            .findOne({ "name": "Test" }, (err, result) => {
                try {
                    console.log(result.name);
                } catch (err) {
                    throw new Error(err);
                }
            });
    });
