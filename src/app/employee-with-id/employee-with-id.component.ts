import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-with-id',
  templateUrl: './employee-with-id.component.html',
  styleUrls: ['./employee-with-id.component.css']
})
export class EmployeeWithIdComponent {
  employeeId : number =0
  employee! : Employee
  isReady : boolean = false

  constructor(private activeRoute : ActivatedRoute, private srv : EmployeeDetailsService){}

  runCode()
  {

    /*

        fetch all query related data from browser request
    */

    let queryData = this.activeRoute.paramMap.subscribe(

      //find out parameters of the query
      (params)=>{

        //locate eid
        let value = params.get("eid")

        //if eid is not null, type cast eid value to unknown and then to number
        if(value != null){
          this.employeeId = (value as unknown as number)
        }
      }
    )
      this.employee = this.srv.fetchEmployeeById(this.employeeId)
      console.log(this.employee)
      this.isReady=true

  }

}
