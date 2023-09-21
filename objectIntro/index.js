let course =
{
    title: "Learn CSS grid course for free",
    lessons: 16,
    creator: "UncleBola",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.tags)
console.log(course["creator"]) // this is same thing as rendering at object file 


let castleLisiting = 
{
    title: "Live like a king in my castle",
    isSuperHost: true,
    location: "Europe",
    price: 190,
    features: ["One-Bedroom", "Two-Beds", "Private half-bath", "Four-guests"]
}

console.log(castleLisiting.features)
console.log(castleLisiting['location'])