import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexPipe } from './sex/sex.pipe';
import { AuthorityPipe } from './authority/authority.pipe';
import { RoomTypePipe } from './room-type/room-type.pipe';
import { RoomStatusPipe } from './room-status/room-status.pipe';
import { CleanPipe } from './clean/clean.pipe';
import { OrderStatusPipe } from './order-status/order-status.pipe';
import { CateringSendPipe } from './catering-send/catering-send.pipe';

@NgModule({
    declarations: [SexPipe, AuthorityPipe, RoomTypePipe, RoomStatusPipe, CleanPipe, OrderStatusPipe, CateringSendPipe],
    exports: [
        SexPipe,
        AuthorityPipe,
        RoomTypePipe,
        RoomStatusPipe,
        CleanPipe,
        OrderStatusPipe,
        CateringSendPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
