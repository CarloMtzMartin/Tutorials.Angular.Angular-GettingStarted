import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  weight: number = 75;
  height: number = 1.8;
  bmi: number = 0;
  
  inputCm: number = 0;
  outputFt: number = 0;

  inputC:number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  calculateBmi() {
   return this.weight / (this.height * this.height);
  }
  convertCelsiusToFahrenheit() {
    console.log(this.inputC)
    return (this.inputC * (9/5)) + 32;
  }
  convertCmToFt() {
    console.log(this.inputCm);
    return this.inputCm * 0.0328084;
  }

  
}
