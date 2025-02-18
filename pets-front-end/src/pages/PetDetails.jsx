import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function PetDetails() {
    const [petDetails, setPetDetails] = useState(null)
    const {id} = useParams()
    
    async function getPet() {
        const foundPet = await axios.get(`http://localhost:3000/pets/${id}`)
        setPetDetails(foundPet.data)
    }

    useEffect(()=>{
        getPet()
    }, [])

  return (
    <>
    <hr /> 
    {petDetails && <h3>{petDetails.name}</h3>}
    {petDetails && <h3>{petDetails.age}</h3>}
    {petDetails && <h3>{petDetails.breed}</h3>}
    <hr />
    
    </>
  )
}

export default PetDetails