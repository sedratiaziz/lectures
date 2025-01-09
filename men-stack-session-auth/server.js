// =======================
// 1. IMPORTS
// =======================
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const morgan = require("morgan");
require('dotenv').config()
const mongoose = require("mongoose")
const User = require("./models/user")
const authController = require('./controllers/auth')
const session = require('express-session');


const actorsController = require('./controllers/actors')


// =======================
// 2. MIDDLEWARE
// =======================
app.use(express.urlencoded({ extended: false })); // parses the request body. Needed for the req.body
app.use(methodOverride("_method")); // Will change the methods for
app.use(morgan("dev")); // Logs the requests in the terminal

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)


// =======================
// 3. CONNECTION TO DATABASE
// =======================
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Connected to DATABSE: ", mongoose.connection.name)})
.catch(()=>{console.log("ERROR CONNECTING TO DB:")})






// =======================
// 4. ROUTES
// =======================

app.use("/auth",authController)

app.use("/actors",actorsController)

app.get("/", async (req, res) => {
  console.log(req.session.user)
  res.render("index.ejs",
    {user:req.session.user}
  )
})

app.get("/vip-lounge", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send("Sorry, no guests allowed.");
  }
});









// =======================
// 5. LISTENING ON PORT 3000
// =======================
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
