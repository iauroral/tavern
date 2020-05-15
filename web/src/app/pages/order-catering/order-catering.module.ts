import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { OrderCateringRoutingModule } from './order-catering-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    OrderCateringRoutingModule
  ]
})
export class OrderCateringModule { }
