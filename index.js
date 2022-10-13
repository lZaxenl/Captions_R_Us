const express = require("express"); // imports express library
const app = express();  // used to listen for request


// connecting to database using nodejs and mongoose
const mongoose = require("mongoose"); // helps make the connections between our server and mongodb
mongoose.connect('mongodb://localhost:27017/node-file-upl', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
app.use(express.static("website"));



const uri = process.env.MONGODB_URI;



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