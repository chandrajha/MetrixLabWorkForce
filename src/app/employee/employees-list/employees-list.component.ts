import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  empLists:any;
  empDetail:any;
  pageNumbers:any;
  empList:boolean=true;
  totalEmployee: any;


  constructor(private empService:EmployeeService,private route:Router) { 
    
  }

  ngOnInit(): void {
    this.getEmpLists(1);
  }


  getEmpLists(pageNumber){
    this.empService.getEmployeelist(pageNumber).subscribe((res:any)=>{
      this.totalEmployee=res.total;
      this.empLists=res.data;
      console.log("this--->",res);
      this.pageNumbers = Array(res.total_pages).fill(0).map((x,i)=>i);  
      console.log("pageNumbers--",this.pageNumbers);
         
      
    })
  }
  showEmpDetails(empID){
    this.empService.getEmployeeDetail(empID).subscribe((res:any)=>{
      this.empDetail=res.data;
      console.log("-=-==-",this.empDetail);
      
    })
  }
 
}
