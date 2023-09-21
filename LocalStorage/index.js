let myLeads = [];
const inputEl = document.getElementById("input-el") //let & const same  but const can't be reassigned
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")


localStorage.setItem("Hints", "You are about to make it") // to make it feature on the memory

let Hint = localStorage.getItem("Hints")// to render it on the memory
console.log(Hint)
// console.log( localStorage.getItem('Hints')) //another way of doing getItem


localStorage.clear// to clear it,

//they all work independently without at a time

