let fruit = ["🍓","🍓","🍊","🍓","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit()
{
    for (let i = 0; i < fruit.length; i++)// this go through all the content in a array
    {
        if (fruit[i] === "🍓")
        {
            appleShelf.textContent += "🍓" //store it in the apple shelf
        }
        else if (fruit[i] === "🍊")
        {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit();