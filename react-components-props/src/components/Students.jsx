import { useState } from "react"

function Students(){

    let allStudents = [
        {
          studentName: "Ali",
          grade: 100,
          city:"Manama"
        },
        {
          studentName: "Hasan",
          grade: 99,
          city:"Muharraq"
        },
        {
          studentName: "Loai",
          grade: 100,
          city:"Manama"
        },
      ]

  

      const [students, setStudents] = useState(allStudents)

      function addStudent(newStudent){
         
        setStudents([...students,newStudent])
        

      }


      function sayHello(){
        return "Hello"
      }
    return(
        <>
        {sayHello()}
        {students.map((oneStudent)=>
        <div key={oneStudent.studentName}>
           <h2>{oneStudent.studentName}</h2> 
        </div>
        )}
        <button onClick={()=>{addStudent({studentName:"Faisal"})}}>Add New Student</button>

        </>

    )
}

export default Students