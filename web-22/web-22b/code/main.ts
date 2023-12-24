import "zone.js"
import "@angular/compiler"
import { bootstrapApplication } from "@angular/platform-browser"
import { Component } from "@angular/core"

//@ symbol is used for Decorate the following to be easy-written

@Component({
    standalone: true,
    selector: "sample-app",
    template: "<p>Welcome to Brand {{brand}} </p>" //{{}} is interpolation means display/print
    // Angular has no command, it has only symbols
   // template: "<button (click) = 'next()'>Go</button> <h3>{{current}}</h3>" //(click) = 'function()' is used to direct the flow
})
class Main {
    brand = "iCoffee"
    location = "Bangkok"
    current = 0
    next () {
        this.current ++ // if we want to call something in the same class, "this" is indeed 
    }
}
bootstrapApplication(Main) //bootstrap mean "Start"
