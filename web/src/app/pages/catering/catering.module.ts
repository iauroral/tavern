import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CateringRoutingModule } from './catering-routing.module';

@NgModule({
  declarations: [MainComponent, AddComponent, EditComponent],
  imports: [
    CateringRoutingModule,
    CommonModule
  ]
})
export class CateringModule { }
