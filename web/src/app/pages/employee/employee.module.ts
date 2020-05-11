import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [MainComponent, AddComponent, EditComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        PipeModule
    ]
})
export class EmployeeModule { }
