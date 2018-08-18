import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayReverse'
})
export class ArrayReversePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return (value !== null) ? value.reverse() : value;
  }

}
