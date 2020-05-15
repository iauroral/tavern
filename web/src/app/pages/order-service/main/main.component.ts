import { Component, OnInit } from '@angular/core';
import { OrdersServiceDetail } from '../../../entity/orders-service-detail';
import { OrderServiceService } from '../../../service/order-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orderServices: Array<OrdersServiceDetail> = new Array<OrdersServiceDetail>();

  constructor(private orderServiceService: OrderServiceService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.orderServiceService.getAll()
      .subscribe((services: Array<OrdersServiceDetail>) => {
        this.orderServices = services;
      });
  }

  send(orderService: OrdersServiceDetail) {
    this.orderServiceService.send(orderService.id)
      .subscribe(() => {
        alert('服务状态更新成功');
        this.load();
      });
  }

}
