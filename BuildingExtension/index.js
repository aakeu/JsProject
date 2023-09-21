let myLeads = [];
const inputEl = document.getElementById("input-el") //let & const same  but const can't be reassigned
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

console.log(ulEl)



inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value) //store and push vaule from inputEl to the array
inputEl.value = "" //this reset the box once save input is clicked
console.log(myLeads)
renderLeads()

})



function renderLeads()
{
    let listItems = ''
for (let i = 0; i < myLeads.length; i++)
{
    // listItems += 
    // "<li> <a target='_blank' href='" + myLeads[i]
    //  + "'>" + myLeads[i]  + "</a></li>"
    // this line above make let input clickable

//this is using template string method (above and below are same) 

listItems += 
`<li> 
<a target='_blank' href='${myLeads[i]}'>  ${myLeads[i]}  
</a>
</li>`





//   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//    this log leads out one after the other in unorderlist with innerHTML
//   innerHTML help manipulate java to do html work and below is another

//     const li = document.createElement('li')
//     li.textContent = myLeads[i]
//     ulEl.append(li)
//
}

ulEl.innerHTML = listItems

}


