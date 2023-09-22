let data = [
    {
        player: "UncleBola",
        score : 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const bolaBtn = document.getElementById("bola-btn")

bolaBtn.addEventListener("click", function() {
    console.log(data[0].score) // this will log out only the score 52
})