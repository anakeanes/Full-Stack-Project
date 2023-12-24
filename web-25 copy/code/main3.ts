import "zone.js"
import "@angular/compiler"
import { bootstrapApplication } from "@angular/platform-browser"
import { Component } from "@angular/core"
import { CommonModule} from "@angular/common"

@Component({ //p for paragrapgh
    standalone: true,
    imports: [CommonModule],
    selector: "sample-app",
    template: `
                <select #current (change) = "refresh()")>
                <option *ngFor = "let e of engines">{{e}}</option>
                </select>
                <div *ngIf = "current.value == 'Diesel'">
                    <input placeholder = "CC">
                    <button>Update</button>
                </div>
                <div *ngIf = "current.value == 'Diesel'">
                    <input placeholder = "Door">
                    <button>Save</button>
                </div>
                <div *ngIf = "current.value == 'Diesel'">
                    <input placeholder = "Price">
                    <button>OK</button>
                </div>
            `
            
})

class start {
   engines = ["Diesel", "Benzene", "EV"]
   refresh() {

   } // must have function "refresh" to trigger the template to change
}
bootstrapApplication(start)