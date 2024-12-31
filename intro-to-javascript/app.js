// console.log('hello world!');

// let car = 'Ferrari Enzo';
// console.log(car);

// // Updating the value
// car = 'toyota corolla'
// console.log(car);
// // NEVER update it like this:
// // let car = 'toyota corolla';


// //general assembly bahrain
// const generalAssemblyBahrain = 'gaBahrain';

// let firstName = 'Abdulaziz';
// console.log(firstName)

// let lastName = 'Sedrati';
// console.log(lastName);

// // 
// console.log(`my name is ${firstName} ${lastName}` );



/* 
Exercise 1:
Declare 3 variables for `name`, `city`, and `favNumber`, and `console.log()` each like the following:
**Output**: `"My name is Omar"
 */ 

//Excersice
// const name = 'Omar';
// const city = 'Manama';
// const favnumber = 7;

// console.log(`My name is ${name}, i live in ${city} and my favourite number is ${favnumber}`);




//Control Flow

//always usew ===
//console.log(4 == '4' && 4 == 4 || 4 > 3);






//if statement 
//stop light

// let light = 'yellow';

// if (light === 'red') {
//     console.log('STOP!!!');
// } else if (light === 'yellow') {
//     console.log("slow down");
// } else if(light === 'green') {
//     console.log('Go!');
// } else {
//     console.log('call da police amigo');
// }


//Exercise 2
// const myNumber = 0;

// if (myNumber > 0) {
//     console.log(`${myNumber} is POSITIVE`)
// } else if (myNumber === 0) {
//     console.log('0 is not positive or negative')
// } else {
//     console.log(`${myNumber} is NEGATIVE`)
// }


for (let i = 0; i<10; i++){
    if(i%2 == 0) {
    console.log(i);
    }        
}

console.log('---------')

for (let i = 0; i<10; i++){
    if(i%2 !== 0) {
    console.log(i);
    }        
}