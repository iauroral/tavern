import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../../pipe/pipe.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MainComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    PipeModule
  ]
})
export class OrderModule { }
