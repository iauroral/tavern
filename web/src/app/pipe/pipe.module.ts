import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexPipe } from './sex/sex.pipe';
import { AuthorityPipe } from './authority/authority.pipe';
import { RoomTypePipe } from './room-type/room-type.pipe';



@NgModule({
    declarations: [SexPipe, AuthorityPipe, RoomTypePipe],
  exports: [
    SexPipe,
    AuthorityPipe,
    RoomTypePipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
