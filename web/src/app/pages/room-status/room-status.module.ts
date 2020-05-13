import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RoomStatusRoutingModule } from './room-status-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RoomStatusRoutingModule
  ]
})
export class RoomStatusModule { }
