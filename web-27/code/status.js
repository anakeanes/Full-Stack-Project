import React, {Component} from "react"
import ReactDOM from "react-dom/client"

class Status extends Component {
    state = {current : 0, list: ["Single", "Married", "Divorced", "Widowed"]}
    // same as list = ["Single", "Married", "Divorced","Widowed"]
    render() {
        return <div>
            <button onClick={(e) => this.next(e)}>{this.state.list[this.state.current]}</button>
        </div>
    }
    next(event) {
            let t = this.state.current // stored the value
            t ++
            if ( t >= this.state.list.length) t = 0
            this.setState({current: t})
    }
}






var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<Status />)