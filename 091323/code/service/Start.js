var http = require("http")                        //the http module is a built-in module that came with node.js
var server = http.createServer(main)              // Assign the function name "main" to manage the request
server.listen(13000)                              // will be operate at port No. 13000

function main(request, response) {
    var head = { }
    response.writeHead(200, head)
    response.write("<button>Love</button>")
    response.end()
}

// node start.js มันจะค้างอยู่คือถูกแล้ว
// เปิด Web Browser ไปที่ http://xx.xx.xx.xx:13000

// ใน main() จะส่งคำว่า Content-Type ไปให้ Client
// ตรงนี้จะเกิดปัญหานิดหน่อย เพราะมีเครื่องหมาย - ตรงกลาง
// ถ้าจะส่งคำว่า Location ก็ส่งได้เลย
  var head = { }
  head.Location = "https://amazon.com"

// แต่พอมี - จะ Error เช่น
//var head = { }
//head.Content-Type = "text/html"
//              '
//              '-------------------------> Error
// ทางแก้คือ ต้องใช้ Syntax แบบที่สอง
  var head = { }
  head["Content-Type"] = "text/html"
