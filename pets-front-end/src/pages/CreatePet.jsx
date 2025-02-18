
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function CreatePet() {

    const navigate = useNavigate() 
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        breed: '',
    })


async function handleSubmit(event) {
    event.preventDefault()

    await axios.post(`http://localhost:3000/pets`, formData)

    navigate('/pets')
    setFormData({
        name: '',
        age: 0,
        breed: '',
    })
}

function handleChange(event) {
    setFormData({...formData, [event.target.name]:event.target.value})
}

   return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name:</label>
            <input required onChange={handleChange} id='name' type="text" name='name' value={formData.name}/>

            <label htmlFor="age">age:</label>
            <input min={0} required onChange={handleChange} id='age' type="number" name='age' value={formData.age} />

            <label htmlFor="breed">breed:</label>
            <input required onChange={handleChange} id='breed' type="text" name='breed' value={formData.breed} />
            
            <button>submit</button>    
        </form> 
    </>
  )
}

export default CreatePet
