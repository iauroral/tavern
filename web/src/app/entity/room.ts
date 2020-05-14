export class Room {

  static FREE = 0;
  static ORDER = 1;
  static CHECK = 2;

  id: number;

  number: string;

  type: number;

  description: string;

  price: number;

  status: number;

  clean: boolean;
}
