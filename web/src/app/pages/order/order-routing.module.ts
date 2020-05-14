import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
