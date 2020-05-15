import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ViewRoutingModule } from './view-routing.module';
import { PipeModule } from '../../pipe/pipe.module';
import { RoomComponent } from './room/room.component';
import { CateringComponent } from './catering/catering.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [EmployeeComponent, RoomComponent, CateringComponent, ServiceComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    PipeModule
  ]
})
export class ViewModule { }
