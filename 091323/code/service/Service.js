var express = require("express")
var server = express()
server.listen(13000)
server.get("/check", showCheck)
server.get("/api/show-staff", showStaff)

function showCheck(request, response) {
    response.send("<button> I love you </button>")
}

function showStaff(request, response) {
    response.send(["Mark Z", "Bill G", "Jeff B"])
}   

