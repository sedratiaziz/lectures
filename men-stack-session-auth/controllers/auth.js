const express = require("express")
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')




router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs")
})

router.post("/sign-up", async (req, res) => {
  console.log(req.body)
  const userInDatabase = await User.findOne({ username: req.body.username })

  // check if the username is already taken
  if (userInDatabase) {
    return res.send("Username already taken")
  }

  // check if passwords match
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and Confirm Password must match");
  }

  console.log("OLD PASSWORD: ", req.body.password)

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  console.log("NEW PASSWORD: ", hashedPassword)
  req.body.password = hashedPassword

  const createdUser = await User.create(req.body)

  res.send(`thank you for signing up ${createdUser.username}`)

})

router.get('/sign-in', (req, res) => {
  res.render("auth/sign-in.ejs")
})

router.post("/sign-in", async (req, res) => {

  const userInDatabase = await User.findOne({ username: req.body.username });
  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }

  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  )
  if(!validPassword){
    return res.send("Password Incorrect, please try again")
  }

  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id
  }

  res.redirect("/")

})

router.get("/sign-out",(req,res)=>{
  // destroys the session and logs out the user
  req.session.destroy()
  res.redirect("/")
})



module.exports = router