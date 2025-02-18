import { Routes ,Route } from 'react-router'
import './App.css'
import PageNotFound from './pages/PageNotFound'
import AllPets from './pages/AllPets'
import CreatePet from './pages/CreatePet'
import PetDetails from './pages/PetDetails'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/pets' element={<AllPets />}></Route>
        <Route path='/pets/:id' element={<PetDetails />}></Route>
        <Route path='/pets/create' element={<CreatePet />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
