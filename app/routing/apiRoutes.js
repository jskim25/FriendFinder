// ===============================================================================
// LOAD DATA
// Linking routes to "data" source which holds array of friends data.
// ===============================================================================
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object), the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // req.body is available since we're using the body-parser middleware
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // console.log(req.body);
        var userScore = req.body.scores;
        var totalDifference = 0;

        // nested for-loop: go through friends array and within each friend, loop through array of scores
        for (var i=0; i<friends.length; i++) {
            totalDifference = 0;
            for (var j=0; j<friends[i].scores[j]; j++) {
                var friendScore = friends[i].scores[j];
                totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendScore));
                // going through each friend and replacing each time the if statement holds true
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        friends.push(req.body);
        res.json(bestMatch);
    });
};
