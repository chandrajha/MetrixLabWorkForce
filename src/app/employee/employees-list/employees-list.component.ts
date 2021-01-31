import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  empLists:any;
  pageNumbers:any;


  constructor(private empService:EmployeeService) { 
    
  }

  ngOnInit(): void {
    this.getEmpLists("1");
  }


  getEmpLists(pageNumber){
    this.empService.getEmployeelist(pageNumber).subscribe(res=>{
      this.empLists=res;
      console.log(this.empLists,"this--->");
      this.pageNumbers = Array(this.empLists.total_pages).fill(0).map((x,i)=>i);     
      
    })
  }

}
