function Navbar(){
    let counter = 0;
const clickAlert = () => {
    counter++;
    alert("counter is " + counter)
}

const school = {
    name: "SE Bootcamp",
    location: "Karachi",
    duration: "6 months"
}

let {name: schoolName} = school

    return(
        <ul>
            <li>Homepage</li>
            <li>About page</li>
            <li>Donate page</li>
            <li>{schoolName}</li>
            <button onClick={clickAlert}>CLick!</button>
        </ul>
    )
}

export default Navbar