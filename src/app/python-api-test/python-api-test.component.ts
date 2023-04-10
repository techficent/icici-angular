import { Component } from '@angular/core';
import { PythonApiFetchService } from '../python-api-fetch.service';

@Component({
  selector: 'app-python-api-test',
  templateUrl: './python-api-test.component.html',
  styleUrls: ['./python-api-test.component.css']
})
export class PythonApiTestComponent {


  constructor(private srv : PythonApiFetchService){}

  ngOnInit(){
    this.srv.fetchResponse("http://127.0.0.1:5000/details").subscribe(
      {
        next : (value : any) => {console.log(value)},
        complete: ()=>{console.log("FINISHED")}
      }
    )
  }
}
