const mongoose = require('mongoose');
const Pet = require('../models/pets')
const router = require("express").Router()

router.get("/", async (req, res)=>{
    try {
        const allPets = await Pet.find()
        res.json(allPets)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post("/", async (req, res) => {
    try {
        const newPet = await Pet.create(req.body)
        res.status(201).json(newPet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get("/:petId", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.petId)) {
            return res.status(404).json({error: error.message})
        }

        const foundPet = await Pet.findById(req.params.petId)
        if (!foundPet) {
            return res.status(404).json({error: "Pet not found"})
        }
        res.status(200).json(foundPet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put("/:petId", async (req, res) => {
    try {
        const petToUpdate = await Pet.findByIdAndUpdate(req.params.petId, req.body, {new: true})
        res.json(petToUpdate)
        if (!petToUpdate) {
            res.status(404).json({error: error.message})
        }
        res.status(200).json(petToUpdate)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.delete("/:petId", async (req, res) => {
    try {
        const petToDelete = await Pet.findByIdAndDelete(req.params.petId)
        res.status(204).json(petToDelete)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})




module.exports = router