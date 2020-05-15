import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../service/orders.service';
import { Room } from '../../../entity/room';
import { Service } from '../../../entity/service';
import { Catering } from '../../../entity/catering';
import { OrdersCateringDetail } from '../../../entity/orders-catering-detail';
import { OrdersServiceDetail } from '../../../entity/orders-service-detail';
import { RoomService } from '../../../service/room.service';
import { CateringService } from '../../../service/catering.service';
import { ServiceService } from '../../../service/service.service';
import { Orders } from '../../../entity/orders';
import { CateringTarget, OrderTarget, ServiceTarget } from '../../../target/order';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  oldOrder: Orders = new Orders();

  order: OrderTarget = new OrderTarget();

  room: Room = new Room();
  services: Array<Service> = new Array<Service>();
  caterings: Array<Catering> = new Array<Catering>();
  orderCaterings: Array<OrdersCateringDetail> = new Array<OrdersCateringDetail>();
  orderServices: Array<OrdersServiceDetail> = new Array<OrdersServiceDetail>();

  newOrderCaterings: Array<OrdersCateringDetail> = new Array<OrdersCateringDetail>();
  newOrderServices: Array<OrdersServiceDetail> = new Array<OrdersServiceDetail>();

  private id: number;

  constructor(private ordersService: OrdersService,
              private roomService: RoomService,
              private cateringService: CateringService,
              private serviceService: ServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cateringService.getAll()
      .subscribe((data: any) => {
        this.caterings = data._embedded.caterings.reverse();
      });
    this.serviceService.getAll()
      .subscribe((data: any) => {
        this.services = data._embedded.services.reverse();
      });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ordersService.findById(this.id)
      .subscribe((order: Orders) => {
        this.oldOrder = order;
        this.room = order.orderRoomDetail.room;
        this.orderCaterings = order.orderCateringDetails;
        this.orderServices = order.orderServiceDetails;
      });
  }

  newCatering() {
    this.newOrderCaterings.push(new OrdersCateringDetail());
  }

  newService() {
    this.newOrderServices.push(new OrdersServiceDetail());
  }

  getTotalPrice() {
    let total = this.oldOrder.totalPrice;
    for (const orderCatering of this.newOrderCaterings) {
      if (orderCatering.catering.id) {
        total += orderCatering.catering.price * orderCatering.number;
      }
    }
    for (const orderService of this.newOrderServices) {
      if (orderService.service.id) {
        total += orderService.service.price * orderService.number;
      }
    }
    return total;
  }

  submit() {
    for (const catering of this.newOrderCaterings) {
      this.order.caterings.push(new CateringTarget(catering.catering.id, catering.number));
    }
    for (const service of this.newOrderServices) {
      this.order.services.push(new ServiceTarget(service.service.id, service.number));
    }
    this.ordersService.update(this.id, this.order)
      .subscribe(() => {
        alert('订购成功');
        this.router.navigateByUrl('order');
      });
  }

}
