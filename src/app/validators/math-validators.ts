import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstValue = form.value[sourceOne];
      const secondValue = form.value[sourceTwo];

      if (firstValue + secondValue === +sum) {
        return null;
      }
      return { addition: true };
    }
  }
}
