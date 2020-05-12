import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ViewRoutingModule } from './view-routing.module';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    PipeModule
  ]
})
export class ViewModule { }
