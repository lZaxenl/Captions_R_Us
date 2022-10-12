const express = require("express"); // imports express library
const app = express();  // used to listen for request
//const mongoose = require("mongoose"); // helps make the connections between our server and mongodb



app.get("/", function(req,res) {
    res.send("WORKING!!!")
})

app.listen(process.env.PORT || 5000)