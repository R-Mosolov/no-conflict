var mongoose = require('mongoose');
var Answer = mongoose.model('Answers');

// MAIN FUNCTIONS
module.exports.answersRead = function (req, res) {
    Answer
        .find()
        .exec(function (err, answer) {
                if (err) {
                    sendResponse(res, 400, err);
                } else {
                    sendResponse(res, 200, answer);
                }
            }
        );
};

// ADDITIONAL FUNCTION
var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
