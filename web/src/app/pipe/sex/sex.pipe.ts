import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? '男' : '女';
  }

}
