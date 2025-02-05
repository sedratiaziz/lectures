import { useState } from "react"

function Books(props){

    
    return(
        <>
        {props.books.map((oneBook)=>
        <div key={oneBook.id}>
            <h2>Book title:{oneBook.title}</h2>
            <p>{oneBook.title}</p>
            <button onClick={()=>{props.deleteBook(oneBook.id)}}>Delete Book</button>
        </div>
        )}
        </>
    )
}

export default Books