import "zone.js"
import "@angular/compiler"
import { bootstrapApplication } from "@angular/platform-browser"
import { Component } from "@angular/core"
import { CommonModule} from "@angular/common"

@Component({ //p for paragrapgh
    standalone: true,
    imports: [CommonModule],
    selector: "sample-app",
    template: `<div>
                    <p *ngfor "let c of coffees">{{c}}</p>
               </div>
               <div>
                    <button *ngFor = "let e of coffees">{{e}}</button
                </div>
                <button (click) = "addLove()">Love</button>
                <button (click) = "addHate()">Hate</button>
                <p *ngFor = "let i of all">{{i}}</p>
            `
            //not finish yet. see full code in lecture for09252023
})

class start {
    coffee : Array<string> = ["Latte", "Mocha", "Cappucino", "Thai Tea"]
}
bootstrapApplication(start)