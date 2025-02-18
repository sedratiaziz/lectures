import './App.css'
import {Routes, Route} from 'react-router'
import Students from './components/Students'
import StudentDetails from './components/StudentDetails'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import PageNotFound from './components/PageNotFound'
import CreateStudent from './components/CreateStudent'

// Step 2: import Route and Routes from "react-router"

function App() {

  // exerise 1:
  // 1. create a component called StudentDetails.jsx
  // 2. this component should send an axios request to the endpoin that contains your data
  // 3. create a route in the App.jsx to display this component
  return (
    <>
   
   <Navbar/>
      <Routes>
        <Route path = "/students" element = {<Students/>}  />
        <Route path='/students/:studentId' element = {<StudentDetails/>}/>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='*' element = {<PageNotFound/>}/>
        <Route path='/create' element = {<CreateStudent/>}/>


        {/* <Route path="/404" element={<PageNotFound/>}/>
        <Route path='*' element = {<Navigate to={"/404"}/>}/> */}

        
      </Routes>


      {/* Hello_World_! */}

    </>
  )
}

export default App
