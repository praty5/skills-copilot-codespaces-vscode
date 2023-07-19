// Create web server 
 // Create a route for the path /comments
// The route must accept POST requests and convert the incoming data to an object before appending it to the array.
// The route must accept GET requests and send the array as the response.
// Use the route tester to test the route.

const express = require("express");
const app = express();
const port = 3000;

const comments = [
    {
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
];

app.use(express.json());

app.post("/comments", (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.send("POST request received");
});

app.get("/comments", (req, res) => {
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});