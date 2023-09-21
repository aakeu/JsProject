let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands [randomIndex] // this ask it to use the array up 
}

console.log ( getHand() )