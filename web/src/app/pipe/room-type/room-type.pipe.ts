import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomType'
})
export class RoomTypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 3) {
      return '套房';
    } else if (value === 2) {
      return '三人';
    } else if (value === 1) {
      return '双人';
    } else {
      return '单人';
    }
  }

}
