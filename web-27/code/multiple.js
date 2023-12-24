import React, {Component} from "react"
import ReactDOM from "react-dom/client"
import {Banner, Sample} from "./additional copy"    //import from file, use ./




var t = document.getElementById("target")
var r = ReactDOM.createRoot(t)
r.render (<div><Banner /><Sample /></div>)