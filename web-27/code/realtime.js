import React, {Component} from "react"
import ReactDOM from "react-dom/client"

class Realtime extends Component {
    state = { price: "...", label: "Success"} // use lable to change the button from refresh to success
    render() {
        return <div>
            <button onClick={ e => this.go(e)}>Refresh</button>
            <pre>{this.state.price}</pre>
        </div>
    }
    async go(event) {
        var url= "https:// api.coinbase.com/v2/prices/BTC-USD/spot>>"
        var response = await fetch(url)
        var result = await response.text()
        this.setState({price: result})
        event.target.innerText = "Success"    // inappropriate example, should indicate at set state// change the button from refresh to Success
    }
}


var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<Realtime />)