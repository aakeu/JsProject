const credit = 12


if ('')
{
    console.log("Let's play already")
}
else 
{
    console.log("Sorry, you have no credit ")
}

//false
//0
//""
//null
//undefined
//NaN

//truthy

let currentViewers = null

currentViewers = ['jane', 'nick']

currentViewers = null // hiericy applies and this cancel out the viewers

if (currentViewers) 
{
    console.log("we have viewers")
}

// evaluation of true or false 

let trueofFalse = Boolean("hello")

console.log(trueofFalse)

console.log( Boolean(""))// false
console.log( Boolean("0"))// true
console.log( Boolean(100))//true
console.log( Boolean(null))//false
console.log( Boolean([0]))//true
console.log( Boolean(-0))//false