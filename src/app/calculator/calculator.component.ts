import { Component } from '@angular/core';
import { Option } from '../Option';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstNumber : number = 0
  secondNumber : number = 0
  result : number  = 0
  optionText : string =""
  operation : Option = Option.ADDITION

  mapOptionToEnum(){
    if (this.optionText == "Addition"){
      this.operation = Option.ADDITION
    }

    if (this.optionText == "Subtraction"){
      this.operation = Option.SUBTRACTION
    }

    if (this.optionText == "Multiplication"){
      this.operation = Option.MULTIPLICATION
    }

    if (this.optionText == "Division"){
      this.operation = Option.DIVISION
    } 

    this.menuFunction()


  }


  menuFunction(){
    if (this.operation ==Option.ADDITION){
      this.addition()
    }

    if (this.operation == Option.SUBTRACTION){
      this.subtraction()
    }
    if (this.operation == Option.MULTIPLICATION){
      this.multiplication()
    }
    if (this.operation == Option.DIVISION){
      this.division()
    }
  }


  addition() : void {
      this.result = this.firstNumber + this.secondNumber
  } 

  subtraction() : void {
    this.result = this.firstNumber - this.secondNumber
  }  

  multiplication() : void {
    this.result = this.firstNumber * this.secondNumber
  } 
  division() : void {
    this.result = this.firstNumber / this.secondNumber
  } 

  ops = new FormControl('');

  opsList: string[] = ["Addition","Subtraction", "Multiplication","Division"];
}
