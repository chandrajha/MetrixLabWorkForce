import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url="https://reqres.in/api";

  constructor(private http:HttpClient) { }
  getEmployeelist(pageNumber){    
    return this.http.get(this.url+"/users?page="+pageNumber);
  }

  
  getEmployeeDetail(userID){    
    return this.http.get(this.url+"/users/"+userID);
  }
}
