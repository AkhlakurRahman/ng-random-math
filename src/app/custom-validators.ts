import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  static addition(firstValue: string, secondValue: string, target: string) {
    return (form: AbstractControl) => {
      const a = form.value[firstValue];
      const b = form.value[secondValue];
      const answer = form.value[target];

      if (a + b === parseInt(answer)) {
        return null;
      }

      return { addition: true };
    };
  }
}
