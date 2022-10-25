//const express = require("express"); // imports express library
import express from 'express';
const app = express();  // used to listen for request
import dotenv from "dotenv";
import multer from "multer";
import axios from "axios";
import cors from "cors";
//const axios = require('axios');
// const cors = require('cors');

dotenv.config();

app.use(express.json);
app.use(cors());
app.use(express.static("website"));

const PORT = 5000;
const uri = process.env.MONGO_URI;

// // connect to database and tell me when it is connected
// mongoose
//   .connect(uri, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB connected"));

// const db = mongoose.connection; // db is my connection to the database

app.get('/', async (req, res) => {
  try {
    const response = await axios.post('https://api.assemblyai.com/v2/realtime/token', // use account token to get a temp user token
      { expires_in: 3600 }, // can set a TTL timer in seconds.
      { headers: { authorization: 'a889bf81908a460f87f9cae1590318cf' } }); // AssemblyAI API Key goes here
    const { data } = response;
    res.json(data);
  } catch (error) {
    const {response: {status, data}} = error;
    res.status(status).json(data);
  }
});

// app.listen(process.env.PORT || PORT, () => { console.log(`listening on Port: ${PORT}`) });
app.set('port', 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});
