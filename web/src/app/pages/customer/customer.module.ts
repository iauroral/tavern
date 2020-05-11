import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { PipeModule } from '../../pipe/pipe.module';



@NgModule({
  declarations: [MainComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        PipeModule
    ]
})
export class CustomerModule { }
