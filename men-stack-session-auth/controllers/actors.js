const router = require("express").Router()

router.get("/actors",(req,res)=>{
    res.send("All actors")
})

module.exports = router