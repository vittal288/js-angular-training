import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ret;
    let [stringStartPosition, stringEndPosition] = [args[0], args[1]];
    if (value.length === 0) {
      ret = null;
    }
    for (let i = 0; i < value.length; i++) {
      let retString = value.split('').reverse().join('');
      ret = retString.slice(stringStartPosition, stringEndPosition);
    }

    return ret;
  }

}
