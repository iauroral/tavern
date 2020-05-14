import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../service/orders.service';
import { Orders } from '../../../entity/orders';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orders: Array<Orders> = new Array<Orders>();

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.ordersService.getAll()
      .subscribe((orders: Array<Orders>) => {
        this.orders = orders;
      });
  }

  confirm(order: Orders) {
    this.ordersService.confirm(order.id)
      .subscribe(() => {
        alert('入住办理成功');
        this.load();
      });
  }

  finish(order: Orders) {
    this.ordersService.finish(order.id)
      .subscribe(() => {
        alert('订单办结成功');
        this.load();
      });
  }
}
