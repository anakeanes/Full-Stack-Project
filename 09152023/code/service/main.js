var express = require("express")
var server  = express()
var mysql   = require("mysql")
var source  = "mysql://sheryl:sandberg@127.0.0.1/shop2023"
var pool    = mysql.createPool(source)
server.listen(15000)
server.get("/",       showHomePage)
server.get("/search", showSearchPage)

server.get("/new-search", showNewSearchPage)
server.get("/api/search", search)

function search(request, response) {
  var sql = "select * from products where code=? or name like ?"
  var data = [ request.query.q, "%" + request.query.q + "%" ]
  pool.query(sql, data, function show(error, data) {
                          response.send(data)
                        })
}

function showNewSearchPage(request, response) {
  response.send(newSearchForm)
}

var newSearchForm = `
  <input id="realtime" placeholder="Product name or barcode">
  <p id="report">...</p>
  <script>
    var input = document.getElementById("realtime")
    input.onkeyup = async function check(event) {
                      var text = event.target.value
                      var response = await fetch("/api/search?q=" + text)
                      var data = await response.json()
                      // console.log(data)
                      var buffer = ""
                      for (var i = 0; i < data.length; i++) {
                        buffer = buffer + data[i].name + " / " + 
					data[i].price + "<br>"
                      }
                      var r = document.getElementById("report")
                      r.innerHTML = buffer
                    }
  </script>
`

// https://codestar.work/full-stack-2023-09-15.txt


function showHomePage(request, response) {
  response.send("This is the home page")
}

/*
Function ชื่อ showSearchPage() จะถูกเรียกใช้งาน 2 ครั้ง
ครั้งแรกคือ http://xxx.xxx.xxx.xxx:15000/search จะมองเห็นช่องกรอกข้อมูล
เมื่อผู้ใช้กรอกข้อมูลเช่น Big Bike และกด Enter มา จะเกิด Request ครั้งที่สอง
http://xxx.xxx.xxx.xxx:15000/search?q=Big+Bike
ใน Express.js ข้อมูลจะถูกเก็บไว้ที่ request.query.q
*/

function showSearchPage(request, response) {
  if (request.query.q == null) {   // Request 1
    response.send(searchForm)    
  } else {                         // Request 2
    var sql = "select * from products where code=? or name like ?"
    var data = [ ]
    data.push(request.query.q)
    data.push("%" + request.query.q + "%")
    pool.query(sql, data, function show(error, data) {
                            // HTML
                            if (error == null) response.send(data)
                            if (error != null) response.send(error)
                          })
  }
}

var searchForm = `
  <form>
    <input name="q">
    <button>Search</button>
  </form>
`

// cannot search because there's an error with grant command in sql ---- fix this first