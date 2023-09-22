const welcomeEl = document.getElementById("welcome-el")

function greetUser ( greeting, name, emoji )// this is parameter, it is inside
{
    // welcomeEl.textContent = " "+ greeting + " " + name + " 👋"
    welcomeEl.textContent = 
    `" ${greeting}, ${name}  ${emoji}"`
}

greetUser("Hello", "UncleBola", "👋") // this is argument, it is ouside of function

// passing parameter in a function 



//using int as a passed parameter 
function add ( num1, num2 )// parameter
{
    return num1 + num2
}

console.log(add(3,4))
console.log(add(20,93))// arguement 




// Define a function called "getFirst" that takes an array as an argument.
function getFirst(arr) {
    // Return the first element of the input array.
    return arr[0];
}

// Call the "getFirst" function with an array [10, 2, 5] and store the result in "firstCard".
let firstCard = getFirst([10, 2, 5]);

// Log the value of "firstCard" to the console.
console.log(firstCard);
