console.log (countString([8.'Latte',7,"Mocha"]))
function countString(a) {
    var count = 0
    for (var i=0; i < a.length; i++) {
        if (typeof a[i] == 'String') {
            
            count ++
        }
    }
    return count;
}

//String in JavaScript can be determine by single quote '', double quotes "", or in the multiple line as Grave Accent/ Back Ticks ``

//String is able to use loop as Arrays, but isn't able to modify the charactor

var s = "I love you"
s[2] = 'm' //change cannot be made from "I love you " to "I move you"
for (var i = 0 ; i<s.length ; i ++) {
    console.log (s[i])
}

var a = {
    title: "Astronomy",
    price: 75.0
}
// an object name a contain 2 data, can be called 2 fields are a.title and a.price
//a.publisher = "NASA Media" กลายเป็น 3 Fields

var b = { }          // ให้ b เป็น Empty Object
b.title = "Biology"
b.price = 80.0
b.publisher = "Oxford Printing"

//จะเปลี่ยนข้อมูลใน Field ก็ได้
b.price = 75.0

var data = [
             { name: "David B",   number:  7, salary: 58000 },
             { name: "Michael O", number: 10, salary: 45000 },
             { name: "Frank L",   number:  8, salary: 40000 },
             { name: "Harry K",   number:  9, salary: 31000 }
           ]
//นั่นคือมีข้อมูล 4 ตัว
//data[2] คือ { name: "Frank L",   number:  8, salary: 40000 }
//data[1].salary is 45000
//data[3].name is Haary K

//Looping for printing out name by name
for (var i = 0 ; i < data.length ; i ++) {
    console.log(data[i].name)
}

//Code fragment for finding the avarage of the salary

var avg = 0
for (var i = o ; i < data.length ; i++ ) {
    t = t = t.data[i].salary
}
console.log ("Average Salary is " + (t/data.length).toFixed2)

// Operator "typeof" is used for finding the type of the data

console.log (typeof 7 )  // "number"
console.log (typeof 2.5) // "number"

var o = {title: "Astronomy", price: 75.0}
console.log(typeof o) // "object"

var a = [7, 2.5, "Latte"]
console.log(typeof a) // "Object" because there is no type such as "Array"

function f() {}
console.log(typeof f ) // Function

console.log(typeof true) // " Boolean"

console.log(typeof "love") // "String"

console.log(typeof null) // " object"

var x
console.log (x)             // undefined  ---> not be defined yet
console.log(typeof x )      // "undefined"


//write function to get the data from keyboard as String and Integer
//then create Array as an output from the "Integer"

function create (name, count) {
    var result = []
    for (var i = 0 ; i < count; i ++) {
        result.push(name)
    }
    return result   
}

console.log(create("Mocha", 5)  
)

//create( "Latte",3) and will be shown as an array of "Latte" x3: ["Latte","Latte","Latte"]
//create ("Mocha", 5) and will be shown as the array of "Mocha" x 5 ["Mocha","Mocha","Mocha","Mocha","Mocha"]

