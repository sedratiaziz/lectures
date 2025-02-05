function Summary({books, helloClass}){
    return(
        <>
        <h1>You have {books.length} books</h1>
        <button onClick={helloClass}>Say hello</button>
        </>
    )
}

export default Summary