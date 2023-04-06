import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  employeeRecord : Employee[]=[]


  constructor() { 
    let empObj1 : Employee ={
      employeeName : "Ajay", 
      employeeAge : 32, 
      employeeEmailId : "ajay@abc.com", 
      employeeSkills : ["programming", "Machine Learning"]
      }

    let empObj2 : Employee ={
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
}
