import { Room } from './room';

export class OrdersRoom {

  id: number;

  /** 房间 */
  room: Room;

  /** 入住时间 */
  checkIn: string;

  /** 迁出时间 */
  checkOut: string;
}
