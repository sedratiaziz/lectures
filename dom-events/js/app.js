//****************** IMPORTANT INFO ****************

//Number() => changes stirngs to numbers, if anything else than numbers is passed, it returns NaN

//"5"+"5" = 55

//when you get an element form HTML its treated as Strings, even if its a number, thats why you use Number() to convrt it to numbers

const mainTitleElement = document.querySelector("#main-title");

console.log(mainTitleElement);

// mainTitleElement.style.color = "red"

// mainTitleElement.textContent = "New value"

const likeButtonElement = document.querySelector("#like-button");

const commentButtonElement = document.querySelector("#comment-button");

console.log(commentButtonElement);

commentButtonElement.addEventListener("click", () => {
  // 1. create new commentelement
  const commentElement = document.createElement("li");

  const ulElement = document.querySelector("#comment-ul");

  const inputElement = document.querySelector("#comment-input");

  // 2. add text content to li
  commentElement.textContent = inputElement.value;

  ulElement.appendChild(commentElement);

  console.log(inputElement.value);

  //reseting to empty after adding a new item
  inputElement.value = "";
});

let likeCounter = 0;

// events
//                                 (event,)

//event.target: which element is currently pressed
const toggleLike = (event) => {
  const likeCountElement = document.querySelector("#likeCounter");

  if (event.target.id === "like-button") {
    likeCounter += 1;
  } else if (event.target.id === "dislike-button") {
    likeCounter -= 1;
  }

  likeCountElement.textContent = `${likeCounter} Likes`;
};

likeButtonElement.addEventListener("click", toggleLike);

const disLikeButtonElement = document.querySelector("#dislike-button");

disLikeButtonElement.addEventListener("click", (toggleLike) => {
  likeCounter -= 1;

  //if like counter is negative, set it back to zero
  //this way it stays always above 0
  if (likeCounter < 0) {
    likeCounter = 0;
  }
  disLikeCountElement.textContent = `${likeCounter} Likes`;
});
