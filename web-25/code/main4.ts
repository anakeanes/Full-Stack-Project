//to do application

import "zone.js"
import "@angular/compiler"
import { bootstrapApplication } from "@angular/platform-browser"
import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({ //p for paragrapgh
    standalone: true,
    imports: [CommonModule],
    selector: "sample-app",
    template: `
                <input #task placeholder = "Activity">
                <button (click) = "add(task)">Add</button>
                <p *ngFor = "let i of all">{{i}}</p>
                `
            
})

class start {
   all = []
   add(input) {
    this.all.push(input.value)
    input.value = ""
   }
}
bootstrapApplication(start)