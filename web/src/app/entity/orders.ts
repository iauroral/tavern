import { User } from './user';
import { OrdersRoom } from './orders-room';
import { OrdersCateringDetail } from './orders-catering-detail';
import { OrdersServiceDetail } from './orders-service-detail';

export class Orders {

  static NEW = 0;
  static CHECK = 1;
  static CANCEL = 2;
  static FINISH = 3;

  id: number;

  /** 总价 */
  totalPrice: number;

  /** 顾客信息 */
  custom: User;

  /** 员工信息 */
  employee: User;

  /** 预定时间 */
  reserve: string;

  /** 订单状态 */
  status: number;

  /** 房间详细 */
  orderRoomDetail: OrdersRoom;

  /** 餐饮详情 */
  orderCateringDetails: Array<OrdersCateringDetail>;

  /** 服务详情 */
  orderServiceDetails: Array<OrdersServiceDetail>;

  constructor() {
    this.orderRoomDetail = new OrdersRoom();
    this.orderCateringDetails = new Array<OrdersCateringDetail>();
    this.orderServiceDetails = new Array<OrdersServiceDetail>();
  }
}
