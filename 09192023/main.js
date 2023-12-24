var crypto = require("crypto")
var express = require("express")
var server = express()
server.listen(18000)

var readJson = express.json()
var sessions = []

server.get("/api/me", getCurrentUserDetail)
server.post("/api/login", tryLogIn)
server.post("/api/logout", tryLogOut)
server.get("/api/list-products", listProducts)
server.use(express.static("public"))

function getCurrentUserDetail(request, response) {
    response,send({status: "Error - This API is not ready"})
}
function tryLogIn(request, response) {         //Middlware จะทำงานอย่างไรขึ้นอยู่กับคนเขียน คนเขียน express.jason() คิดไว้ว่าจะอ่านข้อมูลเป็น JSON และเก็บไว้ที่request.body.email
    var email = request.body.email || ""
    var password = request.body.password || ""
    if (email == "" || password == "") {
        response.send({status: "Error- Invalid User Detail"})
        return
    }
    password = encrypt(password)
    var found = -1
    for( var i = 0 ; i < user.length ; i++) {
        if(user[i].email == email &&
            user [i].password == password) {
                found = i
            }
    }
if (found == -1) {
    response.send({status: "Error - Fail to login"})
} else {
    //Fallback connection
    // 1. create token e.g. FD87-837E-DD75-DZ38
    // 2. store the token an our volatile array
    // 3. send the token to the client via HTTP cookie
    var t = randomToken() //1
    sessions[t] = users[found]//2
    response.header("Set-Cookie", "token=" +t )  //3
    response.send({status: "OK"})
  }
}
function tryLogOut(request, response) {
  response.send({status: "Error - This API is not ready"})
}
function listProducts(request, response) {
  response.send({status: "Error - This API is not ready"})
}
var users = [ ]
users.push( {email:"jeff@amazon.com", 
             password: encrypt("Jeff123"), 
             name:"Jeff Bezos"} )
users.push( {email:"sheryl@amazon.com", 
             password: encrypt("Sheryl123"), 
             name:"Sheryl Sandberg"} )

function encrypt(text) {
  return crypto.createHash("sha512")
		.update(text)
		.digest("hex")
}

function randomToken() {
  var width = 4
  var block = 8
  // var pattern = "0123456789"
  var pattern = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var items = [ ]
  for (var i = 0; i < block; i++) {
    var buffer = ""
    for (var j = 0; j < width; j++) {
      var r = parseInt(Math.random() * pattern.length)
      buffer = buffer + pattern[r]
    }
    items.push(buffer)
  }
  // items is [ "xxxx", "yyyy", "xxxx", "yyyy" ]
  return items.join("-")
}

// Not finish yet, get the complete code from Lecture
// Cannot run via localhost, need advise from anyone who knows