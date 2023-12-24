import React, {Component} from "react"
import ReactDOM from "react-dom/client"

class Todo extends Component {
    state = { text: "", list: ["Test 1", "Test 2", "Test 3"]} //use this list only for testing
    render() {
        let items = this.state.list.map( x => <p>{x}</p>) //if we want to test, use this.state.text instead of this.state.message
        //it will use the text state from the above instead of message setState from typing event
        return <section>
            <input value = {this.state.message} onChange={ e => this.typing(e)}/>   
            <button onClick={ e => this.add(e)}>Add</button>
            {items}
        </section>
    }
    add(event) {
        let current = this.state.list         // copy the data to store
        current.push(this.state.message)      // add the data
        this.setState({list: current, message: ""})        // update and overwrite the existed data

    }
    typing(event) {
        //the data from typing will be stored in event.target.value, according to the html standard
        this.setState({message: event.target.value})
    }
}
var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<Todo />)