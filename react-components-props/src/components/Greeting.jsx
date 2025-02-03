function Greeting(props){
    let name = props.name;
    let city = props.city;
    let grade = props.grade
    
    return(
        <>
            <h1>Good morning {name}! <br/> your from {city}, and your grade is: {grade}</h1>
        </>
    )
}

export default Greeting;