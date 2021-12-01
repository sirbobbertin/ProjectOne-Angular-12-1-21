import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Reimburstment } from '../reimburstment/reimburstment.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  baseUrl = "http://localhost:4041/api/employees";

  constructor(private http: HttpClient) { }

  getAllEmployeeService(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

//   getAEmployeeService(employeeId:number): Observable<Reimburstment[]>{
//     return this.http.get<Reimburstment>(this.baseUrl);
// }
}
