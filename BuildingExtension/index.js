let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el") //let & const same  but const can't be reassigned
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let lastClickTime = 0;
const tabs =[
    {url:"https://www.yesbossme.com"}
]
// Retrieve data from local storage and parse it as JSON
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// Log the parsed data to the console (optional)
console.log(leadsFromLocalStorage);


// Check if there is data available in local storage (leadsFromLocalStorage is not null or undefined)
if (leadsFromLocalStorage) {
    // If data is available, assign it to the 'myLeads' variable, overwriting the previous value
    myLeads = leadsFromLocalStorage;
    
    // Render the leads based on the retrieved data
    render(myLeads);
}


// Define a function called "renderLeads" responsible for rendering a list of leads.
function render(leads) 
{
    // Initialize an empty string to store the list items.
    let listItems = '';

    // Iterate through the "myLeads" array to generate list items for each lead.
    for (let i = 0; i < leads.length; i++) 
    {
         // Use template literals to create a list item with a clickable link.
         listItems += `
         <li>
             <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
         </li>`;

          // listItems += 
    // "<li> <a target='_blank' href='" + myLeads[i]
    //  + "'>" + myLeads[i]  + "</a></li>"
    // this line above make let input clickable

//this is using template string method (above and below are same) 
 }

// -  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//    this log leads out one after the other in unorderlist with innerHTML
//   innerHTML help manipulate java to do html work and below is another

// -    const li = document.createElement('li')
//     li.textContent = myLeads[i]
//     ulEl.append(li)
//

  // Set the HTML content of the "ulEl" element to the generated list items.
  ulEl.innerHTML = listItems;
}



// Add a click event listener to tabBtn
tabBtn.addEventListener("click", function() {
    //console.log(tabs[0].url)//.url remove url {} & just render the link
    // Use chrome.tabs.query to get information about the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // tabs[0].url contains the URL of the active tab
        var tabUrl = tabs[0].url;

        // Push the URL to the myLeads array
        myLeads.push(tabUrl);

        // Store the updated myLeads array in local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        // Render the leads (assuming render is defined elsewhere in your code)
        render(myLeads);
    });
});


// deleteBtn.addEventListener("dblclick", function() {
//     console.log("Double-clicked!");
// });



// Add a click event listener to the "delete-btn" element
deleteBtn.addEventListener("click", function() {
    // Get the current timestamp
    let currentTime = new Date().getTime();

    // Calculate the time elapsed since the last click
    let timeElapsed = currentTime - lastClickTime;

    // Adjust the threshold (in milliseconds) for a double-click
    if (timeElapsed < 400) {
        // If the time between clicks is less than 400 milliseconds (adjustable), it's considered a double-click.

        // Clear local storage
        localStorage.clear();

        // Reset the "myLeads" array to an empty array
        myLeads = [];

        // Call the "renderLeads" function to update the UI (assuming it's defined elsewhere)
        render(myLeads);
        
        // Additional actions or code to perform on double-click can be added here.
    }

    // Update the "lastClickTime" to the current time for future comparisons
    lastClickTime = currentTime;
});




inputBtn.addEventListener("click", function() {
    // Push the value from inputEl to the myLeads array
    myLeads.push(inputEl.value);
    // Reset the input box once the "save input" button is clicked
    inputEl.value = "";

    // Store myLeads in local storage after converting it to a JSON string
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    // Render the leads (assuming renderLeads is correctly defined)
    render(myLeads);

    // Log the myLeads array from local storage
    console.log(localStorage.getItem("myLeads"));
});





