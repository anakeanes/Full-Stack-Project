import "zone.js"
import "@angular/compiler"
import { bootstrapApplication } from "@angular/platform-browser"
import { Component } from "@angular/core"

@Component({
    standalone: true,
    selector: "sample-app",
    template: `Welcome to {{city}} <button (click)="next()"</button> <button (click) = "change()">{{status[index]}}</button>
    <button (click) = "go()> Retrieve</button><pre>{{result}}</pre>"<button (click) = "goThai()">{{retriveButtonText}}</button>
    <input [placeholder] = "inputText">`
})
// input [placeholder] is an attribute binding, use for switch the data dynamicly. Normally is used to switch language
//normally we don't allow the client (just like Angular) to connect to the database directly
//according to the security protocol, we/client have to connect through the web services only
class start {
    retrieveButtonText: string = "อ่านข้อมูล"
    inputText: string = "อีเมลล์ผู้ใช้งาน"
    result : string = "..."
    status : Array<string> =  ["Single", "Married","Divorced","Widowed"]
    index : number = 0 
    city = "Atlanta"
    current = "Yes"

    next() {
        this.current = this.current == "Yes" ? "No" : "Yes"
    }

    change() {
       this.index++
       if (this.index >= this.status.length) {
        this.index = 0
       }
    }
    async go() {
        var url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
        var response = await fetch(url)
        this. result = await response.text()
    }
    // function go is an event binding, request to recive and then response
    async goThai() {
        var url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
        var response = await fetch(url)
        this. result = await response.text()
        this.retrieveButtonText = "Read Data"
        this.inputText = "Your Email"
    }

}
bootstrapApplication(start)