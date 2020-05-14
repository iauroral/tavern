import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { OrderManageRoutingModule } from './order-manage-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    OrderManageRoutingModule
  ]
})
export class OrderManageModule { }
