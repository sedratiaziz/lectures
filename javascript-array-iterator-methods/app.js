// const myNumbers = [1, 2, 3, 4, 5];

// //we cant return elements in forEach
// myNumbers.forEach((element, index) => {
//   console.log(`${element} is at index: ${index}`);
// });

//but we can return elements in map()
//map() returns a new array
// const myNames = myNumbers.map((element) => {
//   return element * 2;
// });

// console.log(myNames);

// names = ["hasan", "sara", "loai"];
// names.map((element) => {
//   return `${element}`;
// });



// //      EXCERSICE 1      //
// const instructors = ["Omar", "Salman", "Ruqaya"];
// const newArr = instructors.map((element) => {
//   return `Remeber ${element}, Light mode attracts bugs!`;
// });

// console.log(newArr);


const nums = [100, 2, 5, 42, 99]
// const filtered_nums = nums.filter((element)=>{
//     // if (element == 5) {
//     //     return element
//     // }


//     // Or


//     // return element == 5
// })

// console.log(filtered_nums)


// const nums_above_fifty = nums.filter((element)=>{
//     return element > 50
// })

// console.log(nums_above_fifty)

// const odd_nums = nums.filter((element)=>{
//     return element % 2 !== 0
// })


// console.log(odd_nums)

// EXCERCISE 2
// const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

// const nice_people = people.filter((element)=>{
//     return element !== 'jerks'
// })

// console.log(nice_people)


const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016},
    {color: 'turqouise', make: 'Rollce Royce', year: 2024}
  ];


/*

.find() finds the first occurence of the element, and then it stops
Unlike .filter() which keeps iterating untill the end. 
findIndex() finds the index bruh

*/
//   const white_car = cars.find((element)=>{
//     return element.make === 'Rollce Royce'
//   })
//   console.log(white_car)
  
  
//   const blue_car = cars.findIndex((element)=>{
//     return element.make === 'Rollce Royce'
//   })
//   console.log(blue_car)

 
//   EXCERCISE 3
const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];
const isARandomElephantInMyRoom = thingsInMyRoom.some((element)=>{
    return element === 'random elephant'
})

console.log(isARandomElephantInMyRoom)

/*

every() checks if every value matches the condition 
EVERY ELEMENT MUST match the condition
*/

