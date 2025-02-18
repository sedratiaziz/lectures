import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllPets() {
  
const [pets, setPets] = useState([
    {}
])  
  
 async function getAllPets() {
    const fetchedPets = await axios.get("http://localhost:3000/pets/")
    setPets(fetchedPets.data) 
 }

 useEffect(()=>{
    getAllPets()
 }, [])
  



  return (
    <>
    <h1>All Pets </h1>
        {pets.map((onePet)=>
            <div>
                <h3>{onePet.name}</h3>
            </div>
        )}
    </>
  )
}

export default AllPets