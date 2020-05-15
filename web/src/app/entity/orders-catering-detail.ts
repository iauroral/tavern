import { Catering } from './catering';
import { Orders } from './orders';
import { Room } from './room';

export class OrdersCateringDetail {

  id: number;

  catering: Catering;

  number: number;

  orders: Orders;

  createTime: string;

  provide: boolean;

  room: Room;

  constructor() {
    this.catering = new Catering();
    this.number = 1;
  }
}
