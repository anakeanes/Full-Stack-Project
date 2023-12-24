import React, {Component} from "react"   
import ReactDom from "react-dom/client" //DOM from Document Object Modelling

class Coffee extends Component{          //sub component
    data = ["Latte", "Mocha", "Cappucino"]
    render () {
        // normally we use the following method for conversion
        // var items = []
        // item.push.<button>{this.data.[0]}</button>
        var items = this.data.map( x => <button>{x}</button>)
        return <div>
            {items}
            {this.data.map (e => <p>{e}</p>)}
        </div>
    }
}


var t = document.getElementById("target")
var r = ReactDom.createRoot(t)
r.render (<Coffee />) // for class main component, use the name "Main" not "main"

// use npx command "node package executer"
