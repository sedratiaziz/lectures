import './App.css'
import Greeting from './components/Greeting'
import Counter from "./components/Counter"
import Students from './components/Students'
function App() {


  let weatherData = [
    {
      day: "Saturday",
      tempreture: 70
    },
    {
      day: "Sunday",
      tempreture: 50
    },  
    {
      day: "Monday",
      tempreture: 40
    },  
    {
      day: "Tuesday",
      tempreture: 80
    },  
    {
      day: "Wednesday",
      tempreture: 10
    },
  ]

  /* 
  Exercise 2:

  1. Create a simple Weather component that displays the day and tempreture
  2. map through the array weatherData above and render the Weather component for each element we have in the array
  3. Pass down the values for each day as a prop and display them in the component
   */
  

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

  console.log(allStudents[0].studentName)
  return (
    <>
      {/* <h1>Hello World</h1>
      {allStudents.map((oneStudent)=>
          <Greeting key={oneStudent.studentName} studentName = {oneStudent.studentName} grade = {oneStudent.grade}/>
      )} */}
      <Counter/>
      <Students />


{/* 
exercise 1:

1. for the Greeting component
2. make the city a prop
3. pass the prop down to the greeting component
4. display the value in the component
*/}
    </>
  )
}

export default App