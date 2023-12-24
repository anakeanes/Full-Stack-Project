//convert 1 tical to a gram

function convertTicalToGram(t) {
    return t * 15.244
}

//convert TroyOunce tp Gram

function convertTroyOunceToGram (o) {
    return 28.3495 * o
}

//convert gram to tical

function covertGramtoTiacal (gram){
    return g/15.44
}

//vconvert gram to troy ounce

function covertGramtoTical (gram) {
    return g*28.3575
}

//try to write code in 1-n or 1-7 without looping

function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}

const n = 8; // Change this to the desired value of n
printNumbers(n);

//functional programming
//convert exam point to grade

var a = [57,62,85,48,71,60,32]

// use map function for convert the data inside the array

var b = a.map(convert)
console.log(b)

function convert (x) {
    if (x >= 80) return "a"
    if (x >= 70) return "b"
    if (x >= 60) return "c"
    if (x >= 50) return "d"
    else return "F"
}
//-------------------------------------------------------//
// chaining function
// filter fist, then map

var a = [57,62,85,48,71,60,32]
var b = a.filter(check).map(check)
function check(x)
console.log(a)
console.log(b)

//ref to the function check

function check (x) {
    if (x >50) return true
    else return false
}
function convert (x) {
    if (x >= 80) return "a"
    if (x >= 70) return "b"
    if (x >= 60) return "c"
    if (x >= 50) return "d"
    else return "F"
}

//---------------------------------------------------------//
//back to map "passed" and "failed"
var a = [57,62,85,48,71,60,32]
var b = a.map(check)
console.log(a)
console.log(b)

// let's do it in the ternary operator style
// (1) condition ? t-value : f- value

function check (x) {
    return x>= 50 ? "P" : "F"      // stand for if x>=50 convert the number to P, else go to F
}

// (2) Annonymous Funtion (No-name Function)
var b = a.map(function check (x) {
    return x>=50 ? "P" : "F"
})
console.log (a)
console.log(b)

//(3) Arrow Function (Arrow Notation) // Lambda Function

var a = [57,62,85,48,71,60,32,45]
var b = a.map ( x >= x >= 50 ? "P" : "F" ) // stand for if x>=50 convert the number to P, else go to F
console.log(a)
console.log(b)

//--------------------------------------------------------//
// Function reduce is a Jargon word means finding the answer
// For example: find summation, find maximum, find minimum
var a = [5,6,8,4,7]
var m = a.reduce(find)
console.log(m)

// Function "find" have 4 variables. the first 2 are previous and x
function find(previous, x) {
    console.log(x)
    return x+previous // x will be updated every time we return, but previous will get from a //6 8 4 7 30
}

//------------------------------------------------------//
//example for finding the maximum value using reduce()

var a = [5,6,8,4,7]
var m = a.reduce(find)
console.log(m)

function find(best, x) {
    return best > x ? best : x //8 //try these with if else statement
}

//---------------------------------------------------------//
//"sort" command is mutale function, cannot be chained or change the existing data
//"filter,map,find" are mutable function, it can be done with itself

var a  = ["Latte", "Mocha", "Cappucino"]
a.sort()
console.log(a) // ["Cappucino", "Latte", "Mocha"]

// study case

var a = [12, 7, 9, 15, 20]
a.sort()
console.log(a) // [12,15,20,7,9] // it sort by the first number

//---------------------------------------------------//
// Three way comparison
// Three of these will be comparable only in this following cases
// a>b is called Positive function, will send the response as Positive Real Number
// a<b is called Negative function, will send the response as Negative Real Number
// a=b is called Neutral, will return the response as 0
// solution (1)
var a = [12, 7, 9, 15, 20]
a.sort (compare)
console.log(a)

function compare (a,b) {
    if (a>b) return 1
    if (a>b) return -1
} // [7,9,12,12,20]

//solution (2)
var a = [12, 7, 9, 15, 20]
a.sort (compare)
console.log(a)

function compare (a,b) {
    return a-b
} // [7,9,12,12,20]

//solution (3) - Arrow Function

var a = [12, 7, 9, 15, 20]
a.sort((a,b) => a-b )
console.log(a)

//--------------------------------------------------------------//



