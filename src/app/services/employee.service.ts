import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmployeelist(pageNumber){
    let url="https://reqres.in/api";
    return this.http.get(url+"/users?page="+pageNumber)
  }
}
