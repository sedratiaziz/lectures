import './App.css'
import { useState } from 'react'
import Books from './components/Books'
import Summary from './components/Summary'

function App() {

  // for every input we need a state


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",

  })

  const booksData = [
    {
      "id": "1ae23ef1",
      "title": "Harry Potter",
      "author":"JK Rowling"
    },
    {
      "id": "1ae23ef2",
      "title": "To Kill a Mokingbird",
      "author": "Harper lee"
    },
    {
      "id": "1ae23ef3",
      "title": "The Lord of the Rings",
      "author": "JR Tolkin"
    },
    {
      "id": "1ae23ef4",
      "title": "The Great Gatsby",
      "author": "F Scott Gerald"
    },
    {
      "id":"1ae23ef5",
      "title":"The Art of War",
      "author":"Sun Tzu"
    }
  ]

  const [books, setBooks] = useState(booksData)
  

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }



  /* Steps:
            1. create a state for each input
            2. add the state as the value for the input
            3. create a new handleChange function to change the state based on the input value
            4. add the function as an onChange events
  
  */

            function handleSubmit(event){
              event.preventDefault()

              alert("Success Created")

              setFormData({
                firstName: "",
                lastName: "",
                password: ""
              })
            }

      function helloClass(){
        alert("Hello class")
      }

      function deleteBook(id){
        
        const filteredBooks = books.filter((oneBook)=>{

          return oneBook.id !== id
        })
        console.log(filteredBooks)
        setBooks(filteredBooks)

      }

  return (
    <>
{/* 
    <form onSubmit={handleSubmit}>
      <label htmlFor="lastName">last Name</label>
      <input
        onChange={handleChange}
        type="text" 
        id='lastName'
        name="lastName"
        value={formData.lastName} 
        
        />

        <label htmlFor="">First name:</label>
        <input
        type="text"
        name="firstName"
        id='firstName'
        value = {formData.firstName} 
        onChange={handleChange}/>

      <label htmlFor="">password</label>
      <input 
      value={formData.password}
      type="password" 
      id='password' 
      name='password' 
      onChange={handleChange} />

      {formData.password.length <8 && <h1>Please input 8 characters</h1>}
      <button>Submit</button>
    </form>
     */}

     <Books books = {books} deleteBook = {deleteBook}/>
     <Summary books = {books} helloClass = {helloClass}/>
    </>
  )
}

export default App
