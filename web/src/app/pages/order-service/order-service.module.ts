import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderServiceRoutingModule } from './order-service-routing.module';
import { MainComponent } from './main/main.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    OrderServiceRoutingModule,
    PipeModule
  ]
})
export class OrderServiceModule { }
