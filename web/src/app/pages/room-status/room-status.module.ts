import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RoomStatusRoutingModule } from './room-status-routing.module';
import { PipeModule } from '../../pipe/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RoomStatusRoutingModule,
    PipeModule,
    ReactiveFormsModule
  ]
})
export class RoomStatusModule { }
