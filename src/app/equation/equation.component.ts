import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

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
    }, [
      (form: AbstractControl) => {
        const { firstValue, secondValue, answer } = form.value
        if (firstValue + secondValue === +answer) {
          return null;
        }
        return { addition: true };
      }
    ]);
  }

}
