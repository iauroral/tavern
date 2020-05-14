import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexPipe } from './sex/sex.pipe';
import { AuthorityPipe } from './authority/authority.pipe';
import { RoomTypePipe } from './room-type/room-type.pipe';
import { RoomStatusPipe } from './room-status/room-status.pipe';
import { CleanPipe } from './clean/clean.pipe';

@NgModule({
    declarations: [SexPipe, AuthorityPipe, RoomTypePipe, RoomStatusPipe, CleanPipe],
  exports: [
    SexPipe,
    AuthorityPipe,
    RoomTypePipe,
    RoomStatusPipe,
    CleanPipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
