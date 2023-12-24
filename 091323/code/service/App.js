var express = require(express)
var server = express()
server.listen(13000)

server.get("/add", addData)
server.get("/list", listData)
server.get("/reset", resetData)

var data = [ ]

function addData(request, response) {                //data from /add?value=33.0 will be stored at request.query.value
    var v = +request.query.value || null
    if (v == null) { }
    if (v != null) {data.push(v)}
    response.send("OK")
}

function listData(request, response) {
    response.send(data)
}

function resetData(request, response) {
    data = [ ]
    response.send ("OK")
}

// run command is Node filename, type in the terminal box