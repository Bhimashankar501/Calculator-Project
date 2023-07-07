import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clearResult();
    } else {
      this.result += value;
    }
  }

  calculateResult() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clearResult() {
    this.result = '';
  }
}
 
  


