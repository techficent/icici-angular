import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  dateTimeObj! : Date;

  amount : number  = 54.778968

  //                 54.77879
  //                 54.7788


  data = "UsD-ETc-APP"

  pctValue : number = 0.81



  ngOnInit(){
    this.dateTimeObj = new Date()
  }
}
