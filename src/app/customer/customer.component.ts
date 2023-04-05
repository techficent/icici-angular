import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customerCategory : string = "REGULAR"
  styleClass = "red"

  showMessage(){
    console.log("EVENT BINDING WORKS!")
    this.customerCategory = "PREMIUM"
  }

  changeStyle(){
    this.styleClass = "blue"
  }
}
