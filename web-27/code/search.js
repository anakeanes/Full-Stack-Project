import React, {Component} from "react"
import ReactDOM from "react-dom/client"

class Search extends Component {
    branches = ["New York", "Atlanta", "Detroit", "Chicago", "Miami"]
    state = {query: "", result: "..."}
    render () {
        return <section>
                    <input placeholder = "Your City"
                        value = {this.state.query}
                        onChange={ e => this.typing(e)} />
                    <button onClick={ e => this.search(e)}>Search</button>
                    <p>{this.state.result}</p>
                </section>
    }
    typing(event){
        // normally in JavaScript will store the data at event.target.value
        this.setState({query: event.target.value})
    }
    search(event) {
        let flag = "No"
        for (let i = 0; i < this.branches.length; i++) {
            if (this.branches[i] == this.state.query){
            flag = "Yes"
        }
    }
    this.setState({result: flag})
}
}


var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<Search />)