import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.scss'],
})
export class CalculatorWidgetComponent {
  // Create a string as title
  @Input() widgetInput = 'Angular Calculator Component';

  // Create field for show result
  @Output() widgetOutput = new EventEmitter<number>();

  // Create number field to calculation operators
  number1 = 0;
  number2 = 0;

  // Operations
  add(): void {
    this.widgetOutput.emit(this.number1 + this.number2);
  }

  subtract(): void {
    this.widgetOutput.emit(this.number1 - this.number2);
  }
  multiply(): void {
    this.widgetOutput.emit(this.number1 * this.number2);
  }
  divide(): void {
    this.widgetOutput.emit(this.number1 / this.number2);
  }
}
