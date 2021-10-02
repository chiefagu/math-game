import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../validators/math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm!: FormGroup;

  private get randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  get firstValue() {
    return this.mathForm?.value?.firstValue;
  }

  get secondValue() {
    return this.mathForm.get('secondValue')?.value
  }

  constructor() { }

  ngOnInit(): void {
    this.mathForm = new FormGroup({
      firstValue: new FormControl(this.randomNumber),
      secondValue: new FormControl(this.randomNumber),
      answer: new FormControl(''),
    }, [MathValidators.addition('answer', 'firstValue', 'secondValue')]);

  }

}
