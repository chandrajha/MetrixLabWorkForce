import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';


const routes: Routes = [
  {path:"",component:EmployeePageComponent},
  {path:"EmployeePage",component:EmployeePageComponent},
  {path:"employeeDetail",component:EmployeeDetailsComponent},
  {path:"addEmployee",component:AddEmployeePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
export const routingComponents=[EmployeePageComponent,EmployeeDetailsComponent,AddEmployeePageComponent]
