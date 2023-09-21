let cards = [] // order list of item
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""


let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // work like the getElementbyId
let cardsEl = document.querySelector(".cards-el") // using class selector

//working for the play-el function
let player = { //this is a key defination
    name: "UncleBola",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// using fuction to give number vaule
function getRandomCard()
{
    let randomNumber = Math.floor (Math.random() * 13) + 1
    if (randomNumber === 1)
    {
        return (11)
    }
    else if ( randomNumber >= 11)
    {
        return (10)
    }
    else
    {
    return (randomNumber)
    }
    
}


function startGame(){
    isAlive = true; // used to comfirmed value
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame(); // this is used when there is a name change 
}


function renderGame(){
    cardsEl.textContent = "Cards: "  // using arrray instead of hard coding 
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
 
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


function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        // console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    console.log(cards)
   
    renderGame();
    }
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




