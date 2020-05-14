import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../../entity/room';

@Pipe({
  name: 'roomStatus'
})
export class RoomStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === Room.FREE) {
      return '空闲';
    } else if (value === Room.ORDER) {
      return '已预定';
    } else {
      return '已入住';
    }
  }

}
