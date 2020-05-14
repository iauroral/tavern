import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from '../../entity/orders';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === Orders.NEW) {
      return '新下单';
    } else if (value === Orders.CHECK) {
      return '已入住';
    } else if (value === Orders.CANCEL) {
      return '已取消';
    } else {
      return '已完结';
    }
  }

}
