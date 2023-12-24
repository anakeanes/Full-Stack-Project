//Endpoint (Target) http://xxx.xxx.xxx.xxx:13000/search?city=Atlanta

var branches = ["New York", " Boston", "Detroit", "Miami"]

var express = require(express)
var server = express()
server.listen(13000)

server.get("/search", searchData)

function searchData(request, reponse) {          //the recieved data from /search?city=Atlanta will be stored at request.query.city 
    var result = "No"
for ( i=0 ; i<=branches.length ; i++) {
    if (branches[i] == request.query.city) {

        var result = "Yes"
    }
    
    reponse.send(result)
}
}