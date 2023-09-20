let myPoint = 3

function add3Point() {
    myPoint += 3;
}

function remove1Point(){
    myPoint -= 1;
}

add3Point();
add3Point();
remove1Point();
remove1Point();
add3Point();

console.log(myPoint)