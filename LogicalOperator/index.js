let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true)
{
        generateCertificate()
}


function generateCertificate ()
{
    console.log("Generating certificate......")
}


//using boolean to give permission
let hasSolvedChallenge = false
let hasHintsLeft = false 

if (hasSolvedChallenge === false && hasHintsLeft === false )
{
    showSolution ()
}

function showSolution()
{
    console.log("Showing the solution....")
}


// 3 the Or options 

let likeDocumentaries = false ;
let likesStartups = true;

if (likeDocumentaries === true || likesStartups === true)
{
    recommendMovie()
}

function recommendMovie()
{
    console.log("Hey, check out this new film we think you will like!")
}
