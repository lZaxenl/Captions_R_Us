//const express = require("express"); // imports express library
import express from 'express';
const app = express();  // used to listen for request
import mongoose from 'mongoose';
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

app.use(express.json);
app.use(express.static("website"));

const PORT = 5000;
const uri = process.env.MONGO_URI;

// connect to database and tell me when it is connected
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"));

const db = mongoose.connection; // db is my connection to the database

// create schema
const schema = {
  video: video
}
const monmodel = mongoose.model("newVideo", schema);

// post 
app.post("/post", async(req, res) => {
  console.log("inside post function");

  const data = new monmodel({
    video:req.body.video
  })
});

app.listen(process.env.PORT || PORT, () => { console.log(`listening on Port: ${PORT}`) });


// look up mongoose commands






// var upload = multer({ storage: storage })

// app.get("/",(req,res)=>{
//   res.render("index");
// })

// app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
//   var img = fs.readFileSync(req.file.path);
//   var encode_img = img.toString('base64');
//   var final_img = {
//       contentType:req.file.mimetype,
//       image:new Buffer(encode_img,'base64')
//   };
//   imageModel.create(final_img,function(err,result){
//       if(err){
//           console.log(err);
//       }else{
//           console.log(result.img.Buffer);
//           console.log("Saved To database");
//           res.contentType(final_img.contentType);
//           res.send(final_img.image);
//       }
//   })
// })


//Code to start server
// app.listen(3000,function () {
//     console.log("Server Started at PORT 2000");
// })





// look up youtube on how to setup a simple express server

// app.get("/", function(req,res) {
//     res.send("WORKING!!!")
// })
// look up http request ___
    // post
    // get

// app.post is me sending stuff to server
// app.get is me getting stuff from the server