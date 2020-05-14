import { Catering } from './catering';

export class OrdersCateringDetail {

  id: number;

  catering: Catering;

  number: number;

  constructor() {
    this.catering = new Catering();
    this.number = 1;
  }
}
