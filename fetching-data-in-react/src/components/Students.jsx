import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function CreateStudent(props) {
    const [studentName,setStudentName] = useState("")

    function handleChange(event){
        setStudentName(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const newStudent = {
            studentName: studentName
        }
        console.log(newStudent)
        await axios.post("https://omar-ga-class.onrender.com/students",newStudent)
        props.getAllStudents()
        setStudentName("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student Name</label>
        <input 
        type="text" 
        name='studentName'
        id='studentName'
        value={studentName}
        onChange={handleChange}
        />

        

        <button>Create Student</button>
      </form>
    </div>
  )
}

export default CreateStudent