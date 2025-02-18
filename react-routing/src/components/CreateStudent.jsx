import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

function CreateStudent() {

    // step 1: create state for all form Data
    const [formData, setFormData] = useState({
        studentName: "",
        course: "",
        city: ""
    })



    // step 2: create handleChange function for all states to change
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate()

    // step 4: handle submit that prevents default, sends the request to API
    async function handleSubmit(e){
        e.preventDefault()
        const newStudent = {
            studentName: formData.studentName,
            course: formData.course,
            city:formData.city
        }
        console.log(newStudent)
        await axios.post(import.meta.env.VITE_API_URL,newStudent)
        navigate("/students")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* step 3: create inputs for each value like the following */}
                <label htmlFor="studentName">Name:</label>
                <input
                    type="text"
                    name="studentName"
                    id='studentName'
                    value={formData.studentName}
                    onChange={handleChange}
                />

                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="city"
                    id='city'
                    value={formData.city}
                    onChange={handleChange}
                />

                <label htmlFor="course">Course:</label>
                <input
                    type="text"
                    name="course"
                    id='course'
                    value={formData.course}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default CreateStudent
