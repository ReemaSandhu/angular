import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathFun'
})
export class MathFunPipe implements PipeTransform {

  transform(value: number): number {
    // square root
    return Math.sqrt(value);
  }
}
