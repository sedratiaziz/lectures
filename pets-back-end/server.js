const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

app.use(cors({origin: process.env.FRONTEND_URL || "http://localhost:5173"}))
const petsController = require("./controllers/pets.route")

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));

app.get("/", (req, res)=>{
    res.status(501).json({
        message: "you're in home page bro"
    })
})
app.use("/pets", petsController)

app.listen(3000, () => {
  console.log('The express app is ready! port:');
});
