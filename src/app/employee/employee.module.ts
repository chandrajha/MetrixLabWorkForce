import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule,routingComponents } from './employee-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';



@NgModule({
  declarations: [routingComponents, EmployeesListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports: [
    routingComponents
  ]
})
export class EmployeeModule { }
