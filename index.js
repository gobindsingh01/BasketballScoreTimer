// selecting score elements
let score1El = document.getElementById("score1")
let score2El = document.getElementById("score2")

// score variables
let score1 = 0
let score2 = 0

// score1 functions
function score1Plus1(){
    score1 += 1
    score1El.textContent = score1
}
function score1Plus2(){
    score1 += 2
    score1El.textContent = score1
}
function score1Plus3(){
    score1 += 3
    score1El.textContent = score1
}

// score2 functions
function score2Plus1(){
    score2 += 1
    score2El.textContent = score2
}
function score2Plus2(){
    score2 += 2
    score2El.textContent = score2
}
function score2Plus3(){
    score2 += 3
    score2El.textContent = score2
}