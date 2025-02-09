import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

function Countries() {
  let [allCountries, setAllCountries] = useState([])

  async function getAllCountries() {
    const allCountries = await axios.get("https://restcountries.com/v3.1/name/all")
    setAllCountries(allCountries.data)
  }
  

  useEffect(()=>{
    getAllCountries()
},[])



  return (
    <>
    <h1>Countries</h1>

      <ul>
      {allCountries.map((oneCountry)=>
      <li key={oneCountry.name.common}>
      <img src={oneCountry.flags.png} alt="" />
      <h3>{oneCountry.name.common}</h3>
        <h3>population: {oneCountry.population}</h3>
      </li>
      
      )}
      </ul>
      
    </>
  )
}

export default Countries
