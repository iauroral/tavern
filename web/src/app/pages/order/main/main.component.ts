import { Component, OnInit } from '@angular/core';
import { Orders } from '../../../entity/orders';
import { OrdersService } from '../../../service/orders.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orders: Array<Orders> = new Array<Orders>();

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getCustomAll()
      .subscribe((orders: Array<Orders>) => {
        this.orders = orders;
      });
  }

}
