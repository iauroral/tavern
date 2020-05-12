import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { PipeModule } from '../../pipe/pipe.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, AddComponent, EditComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        PipeModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
