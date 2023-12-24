var http = require("http")
var server = http.createServer(main)                           //create our own web server
server.listen(13000)

function main (request, response) {
    if (request.url == "/") return showHomePage(request, response)
    if (request.url == "/shop") return showShopPage(request, response)
    if (request.url == "/pay") return showPaymentPage(request, response)

    var head = { }
    head["Content-Type"] = "text/html"
    response.writeHead(404, head)
    response.write("<i>404 - Not Found </i>")
    response.end()
}

// before we run, we have to kill all the unused programmed function

function showHomePage(request, response)
{
    var head = { }
    head["Content-Type"] = "text/html"                        // indicate the type of the following content
    response.writeHead(200, head)                      // as we are acting as a server. we send the response to the client, 200 means OK
    response.write("<button>Home</Home>")
    response.end ()
}

function showShopPage(request, response)
{
    var head = { }
    head["Content-Type"] = "text/html"
    response.writeHead(200, head)
    response.write("<button>Shop</Home>")
    response.end ()
}

function showPaymentPage(request, response)
{
    var head = { }
    head["Content-Type"] = "application/json"
    response.writeHead(200, head)
    var result = { }
    result.name = "Paypal"
    result.amount = 850.0
    result.unit = "THB"
    response.write( JSON.stringify(result) )                 //make "result" to be the string fist, then print it out
    response.end()
}