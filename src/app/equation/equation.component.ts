import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../validators/math-validators';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm!: FormGroup;

  secondsPerSolution = 0;

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
    const startTime = new Date();
    let numberSolved = 0

    this.mathForm = new FormGroup({
      firstValue: new FormControl(this.randomNumber),
      secondValue: new FormControl(this.randomNumber),
      answer: new FormControl(''),
    }, [MathValidators.addition('answer', 'firstValue', 'secondValue')]);

    this.mathForm.statusChanges.pipe(
      delay(300),
      filter(value => value === 'VALID')
      ).subscribe(() => {
      
      numberSolved++
      this.secondsPerSolution = (timeElapsedInMillSecs() / numberSolved) / 1000

      this.mathForm.setValue({ 
        firstValue: this.randomNumber,
        secondValue: this.randomNumber,
        answer: ''
      })
    })

    const timeElapsedInMillSecs = () => {
      return new Date().getTime() - startTime.getTime()
    }
  }

}
