let firstCard = 10;
let secondCard = 10;
let cards = [firstCard, secondCard] // order list of item
let sum = firstCard + secondCard + 2;
let hasBlackJack = false;
let isAlive = true;
let message = ""


let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");

let sumEl = document.querySelector("#sum-el"); // work like the getElementbyId
let cardsEl = document.querySelector(".cards-el") // using class selector


function startGame(){
    renderGame(); // this is used when there is a name change
}

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] // using arrray instead of hard coding 
    sumEl.textContent = "Sum: " + sum //this will help the sum display on screen
    if (sum <= 20){
        message = "Do you want to draw a new card?"
        
     } else if (sum === 21) {
         message = "Wohoo! You've got Blackjack!"
         hasBlackJack = true;
     } else {
         message = "You're out of the game!"
         isAlive = false;
     }
     console.log(message)
     console.log(isAlive)

     messageEl.textContent = message //if you want it to output that message when pressed on screeen
     //subtituting what is there before
}

function newCard(){
    // console.log("Drawing a new card from the deck!")
    let card = 7;
    sum += card;
    cards.push(card)
    console.log(cards)
   
    renderGame();
}





// if (sum <= 20){
//    message = "Do you want to draw a new card? 😔"
   
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🥳"
//     hasBlackJack = true;
// } else {
//     message = "You're out of the game! 😭"
//     isAlive = false;
// }

// console.log(isAlive)
// console.log(message)




