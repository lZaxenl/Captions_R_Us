const express = require("express"); // imports express library
const app = express();  // used to listen for request
//const mongoose = require("mongoose"); // helps make the connections between our server and mongodb

app.use(express.static("website"));

app.listen(process.env.PORT || 5000)


// look up youtube on how to setup a simple express server

// app.get("/", function(req,res) {
//     res.send("WORKING!!!")
// })
// look up http request ___
    // post
    // get

// app.post is me sending stuff to server
// app.get is me getting stuff from the server