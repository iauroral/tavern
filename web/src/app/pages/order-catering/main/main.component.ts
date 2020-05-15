import { Component, OnInit } from '@angular/core';
import { OrderCateringService } from '../../../service/order-catering.service';
import { OrdersCateringDetail } from '../../../entity/orders-catering-detail';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orderCaterings: Array<OrdersCateringDetail> = new Array<OrdersCateringDetail>();

  constructor(private orderCateringService: OrderCateringService) { }

  ngOnInit() {
    this.orderCateringService.getAll()
      .subscribe((caterings: Array<OrdersCateringDetail>) => {
        this.orderCaterings = caterings;
        console.log(caterings);
      });
  }

}
