let randomNumber = Math.random() * 6 //- increase the width to starting from 0.000 to 6

console.log(randomNumber)

Math.random()

let flooredNumber = Math.floor(3.57689)// -it remove the decimal number 

console.log(flooredNumber)

Math.floor()

// -combine both math and floor function together
let randomNumbers = Math.floor ( Math.random() * 6) + 1 //+ one to remove 0: 1-7
console.log (randomNumbers)

function rollDice ()
{
    let Rnumber = Math.floor (Math.random() * 6) + 1
    return Rnumber
}

console.log (rollDice())