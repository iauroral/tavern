import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { OrderCateringRoutingModule } from './order-catering-routing.module';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [MainComponent],
    imports: [
        CommonModule,
        OrderCateringRoutingModule,
        PipeModule
    ]
})
export class OrderCateringModule { }
