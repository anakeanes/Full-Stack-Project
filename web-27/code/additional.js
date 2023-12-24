import React, {Component} from "react"
import ReactDOM from "react-dom/client"

class Counter extends Component {
    current = 0
    state = {current:7, location: "Bangkok"}
    render() {
        return <div>
            <button onClick = {e => TouchList.next(e)}>Next</button>
            <h3>{this.state.current}</h3>
        </div>
    }
    next(event) {
        // state can't be modified. must store the data at the temporary variable first
        var z = this.state. current // read the data from tiems
        z++
        this.setState({current:z})
    }
}

var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<counter />)