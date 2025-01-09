
// // querySelector(): fetches an element for me


// const mainTitleElement = document.querySelector("#main-title")

// console.log(mainTitleElement)


// const pElement = document.querySelector(".cool")

// // .textContent: changes the text in html tag
// pElement.textContent = "New value given in JS file"
// pElement.style.backgroundColor = 'red'

// // 
// let myImageElement = document.querySelector("img")

// myImageElement.src = "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"



//creating an element and adding it to the page

// const bodyElement = document.querySelector('body')

// const h2Element = document.createElement('h2')
// h2Element.textContent = 'this is an h2'

// bodyElement.append(h2Element)



// //chanigng all h3 elements content
// const h3Element = document.querySelectorAll('h3')


// console.log(h3Element)

// h3Element.forEach(oneH3Element => {
//     console.log(oneH3Element)
//     oneH3Element.textContent = 'new text amigo'
// });




//chanigng all h3 elements content using INDEX
// const h3Element = document.querySelectorAll('h3')


// console.log(h3Element)

// h3Element.forEach((oneH3Element, index) => {
//     console.log(index)
//     oneH3Element.textContent = 'new text amigo'
// });

// const myImageElement = document.querySelector('#myImageElement')
// myImageElement.setAttribute('src', 'https://www.google.com/imgres?q=dogecoin%20dog&imgurl=http%3A%2F%2Finsidecollinsville.com%2Fjpg%2F2024-05-24_doge_meme_death_-_herobfb6.jpg%3Fw%3D1000%26h%3D750%26fl%3Dprogressive%26q%3D70%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.kinship.com%2Fdog-lifestyle%2Fdoge-meme-dog-death-news&docid=dSzASBj3bgbClM&tbnid=amESdlOHspqYCM&vet=12ahUKEwiO8vextOuJAxXDRfEDHWMyF8IQM3oECBYQAA..i&w=1000&h=750&hcb=2&ved=2ahUKEwiO8vextOuJAxXDRfEDHWMyF8IQM3oECBYQAA')














const liElements = document.querySelectorAll('li')

liElements.forEach(liElement => {
    liElement.style.fontSize = '50px'
});


function clicck() {
    alert('clicked')
}






