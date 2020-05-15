import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { RoomComponent } from './room/room.component';
import { CateringComponent } from './catering/catering.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'catering',
    component: CateringComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {
}
