var location  = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
fetch (location)          // Should be 2-3 seconds of lagging in the response time

// for instant real time response: Version 2

var location  = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
fetch(location).then(convert)
console.log("reading ....")          // Start the other job first while wating

// when fetch has recieved the information/ data, it will call the function "convert" and send the response as well

function convert(response){
    console.log(response.status)
}

//the output will be shown as "reading ... " and 200

//Version 3

var location  = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
fetch(location).then(convert).then(display)
console.log("reading ....")          // Start the other job first while wating

// when fetch has recieved the information/ data, it will call the function "convert" and send the response as well

function convert(response){
    console.log(response.status) {
        console.log(response.status)     //200 means OK
        var data = response.text()
        return response.text() // or response.json()
    }

    //when convert transformed the data, then it will return the output to the funtion name "display"
    function display(data){
        console.log(data)
    }
}

//the output will be shown as "reading ... " and 200

