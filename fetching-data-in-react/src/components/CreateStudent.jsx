import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function CreateStudent() {
    const [studentName,setStudentName] = useState("")
    const [number,setNumber] = useState("")


    function handleChange(event){
        setStudentName(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const newStudent = {
            studentName: studentName,
            phoneNumber: number
        }
        console.log(newStudent)
        await axios.post("https://omar-ga-class.onrender.com/students",newStudent)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student Name</label>
        <input 
        type="text" 
        name='studentName'
        id='studentName'
        value={number}
        onChange={(e)=>{setNumber(e.target.value)}}
        />

<label htmlFor="phoneNumber">Number</label>
        <input 
        type="text" 
        name='phoneNumber'
        id='phoneNumber'
        value={studentName}
        onChange={handleChange}
        />

        <button>Create Student</button>
      </form>
    </div>
  )
}

export default CreateStudent