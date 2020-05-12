import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {
}
