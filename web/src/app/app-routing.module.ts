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
        path: 'catering',
        loadChildren: () => import('./pages/catering/catering.module').then(m => m.CateringModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'room-status',
        loadChildren: () => import('./pages/room-status/room-status.module').then(m => m.RoomStatusModule)
      },
      {
        path: 'order-manage',
        loadChildren: () => import('./pages/order-manage/order-manage.module').then(m => m.OrderManageModule)
      },
      {
        path: 'order-catering',
        loadChildren: () => import('./pages/order-catering/order-catering.module').then(m => m.OrderCateringModule)
      },
      {
        path: 'order-service',
        loadChildren: () => import('./pages/order-service/order-service.module').then(m => m.OrderServiceModule)
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
