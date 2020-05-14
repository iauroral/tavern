import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../../../service/orders.service';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';
import { OrdersCateringDetail } from '../../../entity/orders-catering-detail';
import { OrdersServiceDetail } from '../../../entity/orders-service-detail';
import { Catering } from '../../../entity/catering';
import { CateringService } from '../../../service/catering.service';
import { Service } from '../../../entity/service';
import { ServiceService } from '../../../service/service.service';
import { Orders } from '../../../entity/orders';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  room: Room = new Room();
  rooms: Array<Room> = new Array<Room>();
  services: Array<Service> = new Array<Service>();
  caterings: Array<Catering> = new Array<Catering>();
  orderCaterings: Array<OrdersCateringDetail> = new Array<OrdersCateringDetail>();
  orderServices: Array<OrdersServiceDetail> = new Array<OrdersServiceDetail>();

  orders: Orders = new Orders();

  form: FormGroup;

  constructor(private ordersService: OrdersService,
              private roomService: RoomService,
              private cateringService: CateringService,
              private serviceService: ServiceService,
              private router: Router) { }

  ngOnInit() {
    this.roomService.getRoomByStatus(Room.FREE)
      .subscribe((rooms: Array<Room>) => {
        this.rooms = rooms;
      });
    this.cateringService.getAll()
      .subscribe((data: any) => {
        this.caterings = data._embedded.caterings.reverse();
      });
    this.serviceService.getAll()
      .subscribe((data: any) => {
        this.services = data._embedded.services.reverse();
      });
  }

  submit() {
    this.orders.totalPrice = this.getTotalPrice();
    this.orders.orderRoomDetail.room = this.room;
    this.orders.orderCateringDetails = this.orderCaterings;
    this.orders.orderServiceDetails = this.orderServices;
    this.ordersService.save(this.orders)
      .subscribe(() => {
        alert('预约成功');
        this.router.navigateByUrl('order');
      });
  }

  newCatering() {
    this.orderCaterings.push(new OrdersCateringDetail());
  }

  newService() {
    this.orderServices.push(new OrdersServiceDetail());
  }

  getTotalPrice() {
    let total = 0;
    if (this.room.id) {
      total += this.room.price;
    }
    for (const orderCatering of this.orderCaterings) {
      if (orderCatering.catering.id) {
        total += orderCatering.catering.price * orderCatering.number;
      }
    }
    for (const orderService of this.orderServices) {
      if (orderService.service.id) {
        total += orderService.service.price * orderService.number;
      }
    }
    return total;
  }
}
