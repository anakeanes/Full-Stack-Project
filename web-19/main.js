var crypto   = require("crypto")
var express  = require("express")
var server   = express()
server.listen(19000)
var readJson = express.json()
var sessions = [ ]
var cookie = require("cookie-parser") 			// similar to express.js
var readCookie = cookie()
server.use(readCookie)							// work on all requests
server.get("/api/me",getCurrentUserDetail) 		//จะตอบว่า User คนนี้คือใคร
server.post("/api/login",readJson,tryLogIn)		//ต้องมี Email กับ Password มาด้วย
server.get("/api/logout",tryLogOut)				//ให้ผู้ใช้ออกจากระบบ
server.get("/api/list-products",listProducts)	
	//มีรายการสินค้า ราคาปกติ กับราคาสมาชิกลด 20% ตัวสุดท้ายทำงานแบบ Polymorphism
server.use(express.static("public"))
	//แปลว่า ถ้า URL ไม่ Match เลยที่ผ่านมา ให้ไปดูใน Directory ชื่อ public

function getCurrentUserDetail(request, response){
// Middleware จะทำงานยังไง ขึ้นอยู่คนเขียน สำหรับ cookie-parser จะทำงานโดย
  // อ่านข้อมูลจาก HTTP Header และ เก็บไว้ที่ request.cookies.token
	var t = request.cookies.token
	if(sessions[t] == null){
		response.send({status :"Error - Invaild current user"})
	} else {
	var result = { }
	result.status = "OK"
    result.name   = sessions[t].name
    result.email  = sessions[t].email
    response.send(result)
  }
}

function tryLogIn(request, response){ 
// Middleware จะทำงานยังไง ขึ้นอยู่กับคนเขียน คนเขียน express.json() คิดไว้แล้วว่า
// จะอ่านข้อมูลเป็น JSON และเก็บไว้ที่นี่ 
	var email    = request.body.email || ""
	var password = request.body.password || ""
	if(email == "" || password == ""){
	response.send({status : "Error - Invaild Data"})
	return
	}
	password = encrypt(password)
	var found = -1
	for(var i = 0 ;i < users.length;i++){
		if(users[i].email == email && 
			users[i].password == password){
				found = i
		}
	}

	if(found == -1){
		response.send({status:"Error - Fail to Log in "})
	}else {
		var t = randomToken()                         	// 1
  		sessions[t] = users[found]                    	// 2
  		response.header("Set-Cookie","token=" + t)  	// 3
  		response.send({status: "OK"})
		// 1. create token e.g. FD87-837E-DD75-DZ38
  		// 2. store the token an our array
  		// 3. send the token to client via HTTP cookie
	}
}

function tryLogOut(request, response){ 
	response.send({status:"Error - this API is not ready"})
}

function listProducts(request, response){
	 response.send({status:"Error - this API is not ready"})
}

var users = [ ]
users.push({email:"jeff@amazon.com",
		password:encrypt("Jeff123"),name:"Jeff Bezos"})
users.push({email:"sheryl@amazon.com",
		password:encrypt("Sheryl123"),name:"Sheryl Sandberg"})

function encrypt(text)
{	return crypto.createHash("sha512")
			.update(text)
			.digest("hex")
}

function randomToken(){
	var width = 4
	var block = 8
	var pattern ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var items = [] 
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
