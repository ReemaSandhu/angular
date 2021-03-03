import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {
  transform(value: string):string {
    return value + ' gm';
  }
  
}