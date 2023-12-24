import React, {Component} from "react"
import ReactDom from "react-dom/client"

class LoveHate extends Component {
    data = ["Test1", "Test2"]
    render () {
        var items = this.data.map(e => <p>{e}</p>)
        return <section>
            <button onClick = {e => this.addLove(e)}>Love</button>
            <button onClick = {e => this.addHate(e)}>Hate</button>
            {items}
        </section>
    }
    addLove (event) {
        this.data.push("Love")
        this.forceUpdate ()
    }
    addHate (event) {
        this.data.push("Hate")
        this.forceUpdate()
    }
}

var t = document.getElementById("target")
var r = ReactDom.createRoot(t)
r.render (<LoveHate />)