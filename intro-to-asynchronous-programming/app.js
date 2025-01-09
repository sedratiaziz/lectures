// axios: package allows me to send requests anywhere online
const axios = require("axios")


/*


steps for handling APIs:

1- read the docs
2- test the API in POSTMAN
3- Implement it in vscode


*/





// //the .get() sends a requet to the browser, much like writing the url in chrome and hitting enter
// const firstCharacter = axios.get("https://swapi.py4e.com/api/people/1")
// console.log(firstCharacter)


// Promise: a special type of object, that comes from aSynchronuos. It has three types:
// - succefull (fullfilled)    - pending    - rejected








// ****** HANDLING PROMISES TWO TYPES: ******



// *** 1.  USING .then() ***

// axios.get("https://swapi.py4e.com/api/peopl/1").then((firstCharacter)=>{
//     console.log(firstCharacter.data.height)
// }).catch((error)=>{
//     console.log(`Error ${error.status}`)
// })





// *** 2.  USING async & await (this is the one we're going to use from now on.)***

// async function getCharacter() {
//     try {
//         const character = await axios.get("https://swapi.py4e.com/api/people/1")
//         console.log(character.data)

//     } catch (error) {
//      console.log("error fetching character")   
//     }
   
// }

// getCharacter(2)




// Excersice
// async function getDarthVader() {
//     try {
//         const dv = await axios.get("https://swapi.py4e.com/api/people/4")
//         console.log(`My name is ${dv.data.name} and my eye color is ${dv.data.eye_color}`)
//     } catch (error) {
//         console.log("Error fetching data. "+error)
//     }
    
// }

// getDarthVader()
// // will print: My name is Darth Vader and my eye color is yellow









