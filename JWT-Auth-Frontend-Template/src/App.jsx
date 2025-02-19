import './App.css'
import {Routes ,Route} from 'react-router'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import ValidateIsLoggedIn from './validators/ValidateIsLoggedIn'
import ValidateIsLoggedOut from './validators/ValidateIsLoggedOut'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ValidateIsLoggedIn><Homepage/></ValidateIsLoggedIn>}/>
        <Route path="/signup" element={<ValidateIsLoggedOut><Signup/></ValidateIsLoggedOut>}/>
        <Route path="/login" element={<ValidateIsLoggedOut><Login/></ValidateIsLoggedOut>}/>
      </Routes>
    </>
  )
}

export default App
