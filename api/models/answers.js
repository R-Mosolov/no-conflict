var mongoose = require('mongoose');

var answersSchema = new mongoose.Schema({
    chramovaTestResult: {
        a1: String,
        a2: String,
        a3: String,
        a4: String
    },
    tomasKilmannTestResult: {
        a1: String,
        a2: String,
        a3: String,
        a4: String,
        a5: String,
        a6: String,
        a7: String,
        a8: String,
        a9: String,
        a10: String,
        a11: String,
        a12: String,
        a13: String,
        a14: String,
        a15: String,
        a16: String,
        a17: String,
        a18: String,
        a19: String,
        a20: String,
        a21: String,
        a22: String,
        a23: String,
        a24: String,
        a25: String,
        a26: String,
        a27: String,
        a28: String,
        a29: String,
        a30: String
    }
});

mongoose.model('Answers', answersSchema);
