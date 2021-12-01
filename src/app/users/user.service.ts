import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:4041/api/employees";

  compareEmployee: Employee[]=[];
  managerService: any;
  allEmployees: any;

  constructor(private http: HttpClient) { }

  validateUser(user: User){
    // consume endpoint to validate the user
    if(user.userId == 1 && user.userPassword == "admin"){
      user.userName = "Sam";
      user.userType = "manager";
      user.userAddress = "Atlanta";
    } else if(user.userId == 2 && user.userPassword == "emp"){
      user.userName = "Priya";
      user.userType = "employee";
      user.userAddress = "Marietta";
    } 
    return user;
  }

  getAllEmployeeService(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  validateUserHTTPService(checkUser: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,checkUser);
  }

  // validateUserHTTP(user: User)
  // { 
  //   this.http.get<Employee[]>(this.baseUrl).forEach( item => {
  //     this.compareEmployee});
       
  //   return this.compareEmployee;
  // }
}
