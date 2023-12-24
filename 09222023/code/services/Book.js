class Book {

}

var a = new Book // C++
var b = new Book () // Java

b.title = "Biology"
b.price = 170.0
b.getSpecialPrice = function() {
    return this.price*0.90
}
console. log(b.getSpecialPrice)

class Product {
    code = " "       // 1 field name code
    price = 0.0      // 1 field name price
    getShippingCost() {    // 1 function
        return 50.0
    }
}

var p = new Product()
p.code = "1234"
p.price = 70.0
console.log(p.getShippingCost())    //50.0

// there are 3 types of class in JavaScript
// 1 Field is data
// 2 Function is command, and there is a special function "constructor()" will be call when we command "new"
// 3 Property

class Circle {
    radius = 0.0     // initate the system to know "radius"
    constructor(radius) {
        this.radius = radius
    }
    getArea () {
        return 3.14*this.radius*this.radius
    }
}

var c = new Circle (5)
console.log (c.getArea())

class Eclipse {
    major = 0.0
    minor = 0.0
    constructor(major,minor) {
        this.major = major
        this.minor = minor
    }
    
    
    getEclipseArea() {
        return 3.14*this.major*this.minor
    }
    
}
var e = new Eclipse(8,5)       //define the input like this. If we want to get the input from the outside, find the way to get it
console.log( e.getEclipseArea())