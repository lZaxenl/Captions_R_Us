const mongoose = require("../database");
 
const uri = "mongodb+srv://admin:password1234@cluster0.prkjjfl.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async ()=> {
    await mongoose.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      serverApi: ServerApiVersion.v1 
    });
    console.log('db connected..!');
};

module.exports = connectDB;