import { Catering } from './catering';
import { Orders } from './orders';

export class OrdersCateringDetail {

  id: number;

  catering: Catering;

  number: number;

  orders: Orders;

  createTime: string;

  provide: boolean;

  constructor() {
    this.catering = new Catering();
    this.number = 1;
  }
}
