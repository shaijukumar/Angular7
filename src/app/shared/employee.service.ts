import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];

  readonly routeURL = "http://localhost:50947/api";

  constructor( private http : HttpClient) { }

  postEmployee(formData : Employee){
    //console.log("Postion : "+ formData.Postion);
   return this.http.post(this.routeURL+"/Employees", formData)
  }

  putEmployee(formData : Employee){
    //console.log("Postion : "+ formData.Postion);
   return this.http.put(this.routeURL+"/Employees/"+formData.EmployeeId, formData)
  }

  refreshList(){
    this.http.get(this.routeURL+"/Employees")
    .toPromise().then( res => this.list = res as Employee[])
  }

  deleteEmployee(id:number){
    return this.http.delete(this.routeURL+"/Employees/"+id)
  }
}
