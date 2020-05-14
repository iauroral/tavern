import { Service } from './service';

export class OrdersServiceDetail {

  id: number;

  service: Service;

  number: number;

  constructor() {
    this.service = new Service();
    this.number = 1;
  }
}
