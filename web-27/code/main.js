import React, {Component} from "react"   
import ReactDom from "react-dom/client" //DOM from Document Object Modelling

class Report extends Component{          //sub component
    render () {
        return <h3>{this.props.location}</h3>
    }
}

class Main extends Component{            //main component
    render () {
        return <div>
            <button>Hello</button>
            <Report location = "New York" />
            <Area width = "25" height = "40" />
        </div>
    }
}

class Area extends Component{
    render () {     //for this , do not forget {}
        return <h1> {this.props.width * this.props.height} </h1>           //for operation that need the variabe from the other lines don't forget the  curly bracket
    } //what we are doing here is different from the lecture. See the lecture for the different ways of doing this
}

var t = document.getElementById("target")
var r = ReactDom.createRoot(t)
r.render (<Main></Main>) // for class main component, use the name "Main" not "main"

// use npx command "node package executer"
