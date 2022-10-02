import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";

  inputCm: number = 0;
  outputFt: number = 0;

  /**
   *
   */
  constructor() {
    
  }

  logout(): void {
    // Implement on Logout method here.
  }

  weight: number = 75;
  height: number = 1.8;
  bmi: number = 0;
  calculateBmi() {
   return this.weight / (this.height * this.height);
  }

  convertCmToFt() {
    console.log(this.inputCm)
    return this.inputCm * 0.0328084;
  }
}
