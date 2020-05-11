import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexPipe } from './sex/sex.pipe';
import { AuthorityPipe } from './authority/authority.pipe';



@NgModule({
    declarations: [SexPipe, AuthorityPipe],
  exports: [
    SexPipe,
    AuthorityPipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
