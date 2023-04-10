import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  employeeRecord : Employee[]=[]
  employees : Employee[]=[]

  result : Employee={
      employeeAge : 0,
      employeeId : -1,
      employeeEmailId:"",
      employeeName :"",
      employeeSkills:[]

  }
  
  constructor(private httpSrv : HttpClient) { 
    let empObj1 : Employee ={
      employeeId : 101,
      employeeName : "Ajay", 
      employeeAge : 32, 
      employeeEmailId : "ajay@abc.com", 
      employeeSkills : ["programming", "Machine Learning"]
      }

    let empObj2 : Employee ={
      employeeId : 102,
      employeeName : "Shreyanshi", 
      employeeAge : 30, 
      employeeEmailId : "chiya@abc.com", 
      employeeSkills : ["documentation", "api development"]
    }
  
    this.employeeRecord.push(empObj1)
    this.employeeRecord.push(empObj2)
  }

  public getData() : Employee[]{
      return this.employeeRecord
  }
  public fetchEmployeeById(eid : number) : Employee{
    let url = "assets/data.json"
    /*  
        from all data fetched, for each new entry found, 
        run a for loop, match eid using if condition and return if match is found.
        If eid doesn't exis t, return a blank object or an error msg
    */
    this.httpSrv.get<Employee[]>(url).subscribe(
      {
        next : (employeeArray : Employee[])=>{
          employeeArray.forEach(  (emp : Employee)=> this.employees.push(emp) )
        },

        complete : ()=>{
          console.log("COMPLETED");
          console.log(this.employees);
        }
      }
    )

    let ans = this.employees.filter(     (emp : Employee)=> emp.employeeId == eid   ).at(0)
    if (typeof(ans) != undefined){
        this.result = ans as Employee
    }
    return this.result
  
      
  }


}




//numbers=[1,2,3,4,5]


// numbers.filter(     (n1 : number)=> {number%2!=0}    )
