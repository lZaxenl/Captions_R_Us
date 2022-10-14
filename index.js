const express = require("express"); // imports express library
//const connectDB = require('./DB/connection');
const app = express();  // used to listen for request

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});

app.listen(process.env.PORT || 5000)



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