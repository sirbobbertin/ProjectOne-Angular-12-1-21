import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:4041/employees/profile";
  updateUrl = "http://localhost:4041/employees/profile/update";

  constructor(private http: HttpClient) { }

  updateInfoService(updateInfo: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.updateUrl+"/"+updateInfo.id, updateInfo);
  }

  viewInfoService(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"/"+employeeId);
  }
  
  // getAEmployeeService(employeeId: number): Observable<Employee>{
    
  // }
}
