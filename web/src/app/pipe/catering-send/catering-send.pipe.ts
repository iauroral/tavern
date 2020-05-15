import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cateringSend'
})
export class CateringSendPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? '已配送' : '未配送';
  }

}
