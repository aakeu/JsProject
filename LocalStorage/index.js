

let myLeads = `["yes.bos"]`; // turn to a string with ``


myLeads = JSON.parse(myLeads) //turn back to array with JSON. parse

myLeads.push('people.see') //push into the array

myLeads = JSON.stringify(myLeads) //turn array back to string with stringfy

console.log(typeof myLeads) // to know type of items





// localStorage.setItem("Hints", "You are about to make it") //-1 to make it feature on the memory

// let Hint = localStorage.getItem("Hints")// to render it on the memory
// console.log(Hint)
// // console.log( localStorage.getItem('Hints')) //another way of doing getItem


// localStorage.clear// -1to clear it,

// //they all work independently without at a time


// let myLeads = `[]` //-2 this turn an array into a string and put item into the array

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.people.com")

// console.log(myLeads) //-2


// let myLeads = `[yes.bos]`; //3 -this tell the type of attribute, the array is now, which is string

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)//3-