const express = require('express');

const app = express();
const methodOverride = require("method-override"); // new
const morgan = require("morgan"); //new


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new



require('dotenv').config()
const mongoose = require("mongoose")

const Fruit = require("./models/fruits")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Connected to DATABSE")
  console.log("Database name:", mongoose.connection.name);})
.catch(()=>{console.log("ERROR CONNECTING TO DB OMAR")})



app.get("/fruits", async(req,res)=>{
    const allFruits = await Fruit.find()
    console.log(allFruits)
    res.render("all-fruits.ejs",{allFruits:allFruits})

})

app.get("/fruits/new", async (req,res)=>{

  res.render("new.ejs")
    
  })

app.post("/fruits",async(req,res)=>{
    console.log(req.body)
    if(req.body.isReadyToEat === "on"){
      req.body.isReadyToEat = true
    }
    else{
      req.body.isReadyToEat = false
    }

    await Fruit.create(req.body)
    res.redirect("/fruits")
  })

app.get("/fruits/:id", async (req,res)=>{
  try{
    console.log(req.params.id)
    const foundFruit = await Fruit.findById(req.params.id)
    console.log(foundFruit)
    res.render("show.ejs",{foundFruit:foundFruit})
  }
  catch(err){
    res.render("error.ejs")
  }

})

app.delete("/fruits/:id", async(req,res)=>{
  try{
    console.log(req.params)
    await Fruit.findByIdAndDelete(req.params.id)
    res.redirect("/fruits")
  
  }
  catch(err){
    res.render("error.ejs")
  }
})


app.get("/fruits/:id/edit", async (req,res)=>{
  console.log(req.params)
  const foundFruit = await Fruit.findById(req.params.id)


  res.render("edit.ejs",{foundFruit})
})

app.put("/fruits/:id", async (req,res)=>{
 if(req.body.isReadyToEat === "on"){
  req.body.isReadyToEat = true;
 }
 else{
  req.body.isReadyToEat = false;
 }

 await Fruit.findByIdAndUpdate(req.params.id,req.body)

 res.redirect(`/fruits/${req.params.id}`)



})


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
