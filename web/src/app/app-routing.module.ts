import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'room',
        loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule)
      },
      {
        path: 'view',
        loadChildren: () => import('./pages/view/view.module').then(m => m.ViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
