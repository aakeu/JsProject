let age = 25

function Busfare()
{
    if (age < 6)
    {
        return ("free")
    }
    else if (age >= 6 && age <= 17 )
    {
        return ("child discount")
    }
    else if (age >= 18 && age <= 26)
    {
        return ("student discount")
    }
    else if (age >= 27 && age <= 66)
    {
        return ("full price")
    }
    else
    {
        return("Senior citizen discount")
    }
}


let fareType= Busfare();
console.log(fareType)

// 2 different ways same answer 
if (age < 6)
{
    console.log ("free")
}
else if (age < 18 )
{
    console.log ("child discount")
}
else if (age < 27)
{
    console.log ("student discount")
}
else if (age < 66)
{
    console.log ("full price")
}
else
{
    console.log ("Senior citizen discount")
}