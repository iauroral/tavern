import { Service } from './service';
import { Orders } from './orders';
import { Room } from './room';

export class OrdersServiceDetail {

  id: number;

  service: Service;

  number: number;

  orders: Orders;

  createTime: string;

  provide: boolean;

  room: Room;

  constructor() {
    this.service = new Service();
    this.number = 1;
  }
}
