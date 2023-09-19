
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl)

let count = 0;
console.log(saveEl)
function increment (){
    count +=  1;
    countEl.innerText = count; 

}



function save () {
    let countStr = count + " - ";
    // -saveEl.innerText += countStr; // wouldn't show text that can't be read by human
    saveEl.textContent += countStr;
    //  -this will show hidden content like space
    countEl.innerText = 0;
    count = 0;
}


