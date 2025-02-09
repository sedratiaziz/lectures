import axios from 'axios'
import React, { useEffect, useState } from 'react'



function oneStudent() {

    let [student, setSudent] = useState({})

    async function getOneStudent() {
        student = await axios.get('https://omar-ga-class.onrender.com/students/10')
        setSudent(student.data)
    }
    
    useEffect(()=>{
        getOneStudent()
    },[])


  return (
    <h3>OneStudent</h3>
  )
}

export default oneStudent