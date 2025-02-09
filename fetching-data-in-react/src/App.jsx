import { useEffect, useState } from 'react'
import './App.css'
import axios, { all } from 'axios'

import Students from './components/Students'
import Countries from './components/Countries'
import OneStudent from './components/oneStudent'
import CreateStudent from './components/CreateStudent'

function App() {
  return (
    <>
      <Students />
      <Countries />
      <OneStudent />
      <CreateStudent />
    </>
  )
}

export default App
