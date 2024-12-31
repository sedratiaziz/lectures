const names = ['aziz', 'mohd', 'ali', 'hamad', 'taha']


//remove from beginning
// names.shift()
// console.log(names)


// //add in the beginning
// names.unshift(11)
// console.log(names)


//starts from index 1, deletes elements mohd, ali and hamad
// names.splice(1, 3)
// console.log(names)

//starts from index 1, deletes elements mohd, ali and hamad
//**optional** the element removed will be put at the index of first argument (here its 1) */
// names.splice(1, 3, 'bruh')
// console.log(names)


// if you want to add at the end without removing any element :
// names.splice(5, 0, 'bruh')
// console.log(names)






//  ************************** LOOPS **************************

//for__of loop  , similar to a forEach loop
// for (const name of names) {
//     console.log(name)
// }

//for__of can be used for strings, ex: to cut words into letters:
// for (const Char of 'omar') {
//     console.log(Char)
// }



//forEach loop
//arguments of a forEach loop is another function, called 'callBack function', its exactly like the for of function.
// names.forEach(function(name, index) {

//     console.log(name, index)

// })


//we write it as an arrow function, not like the function above.
// names.forEach((name, index)=>{

//     console.log(name, index)

// })


//
console.log(names.join(" | "))

let cars = "Lexus, GMC, Chevy"
console.log(cars.split(","))


