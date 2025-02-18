import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function StudentDetails() {
    const [student,setStudent] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
     
    const {studentId} = useParams()

    async function getStudentData(){
        try{
            const studentInfo = await axios.get(`${import.meta.env.VITE_API_URL}/${studentId}`)
            setStudent(studentInfo.data)
        }
        catch(error){
            setErrorMessage("Error Fetching Student Please input valid ID")
        }

    }

    useEffect(()=>{
        getStudentData()
    },[])
  return (
    <div>
      { student && (
        <div>
            <h2>Name: {student.studentName}</h2>
            <p>Name: {student.city}</p>
            <p>Course: {student.course}</p>

        </div>
      )}
      {errorMessage && <h1 id='error'>{errorMessage}</h1>}
    </div>
  )
}

export default StudentDetails
