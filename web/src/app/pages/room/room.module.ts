import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RoomRoutingModule } from './room-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [MainComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule,
    PipeModule
  ]
})
export class RoomModule { }
