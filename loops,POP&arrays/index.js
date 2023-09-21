let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log( "The 5 largest countries in the world:" ) // using arrray instead of hard coding 
    for (let i = 0; i < largeCountries.length; i++)
    {
        console.log("- " + largeCountries[i])
    }

    let largeCountry = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

    let newCountry1 = "China";
    let newCountry2 = "pakistan";

    largeCountry.pop(); // used to delete/remove last item in an array
    largeCountry.shift(); //shith remove the first item in an array
    largeCountry.unshift(newCountry1);// use to put new item to the front of the array
    largeCountry.push(newCountry2); //use to push new item to the end of an array

    console.log(largeCountry)

