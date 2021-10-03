import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appHighlightAnswer]'
})
export class HighlightAnswerDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private controlName: NgControl,
  ) { }

  ngOnInit() {
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map(({ firstValue, secondValue, answer }) => {
          return Math.abs(
            (firstValue + secondValue - Number(answer)) / (firstValue + secondValue) 
          )
        })
      )
      .subscribe(value => {
        console.log(value)
        if (value < 0.2) {
          this.el.nativeElement.classList.add('close')
        } else {
          this.el.nativeElement.classList.remove('close')
        }
      })
  }

}
