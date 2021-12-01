import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager/manager.service';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ManagerComponent } from 'src/app/manager/manager.component';
import { Employee } from 'src/app/employee/employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  allEmployees: Employee[]=[];
  flag = false;

  newUser: Employee = {
    id: 0,
    userName: '',
    password:'',
    address:'',
    jobType: 0
  }

  newUsers: User = new User;


  constructor(private userService: UserService,
              private authService: AuthService,
              private managerService: ManagerService,
              private router: Router) { }

  ngOnInit(): void {
    this.allEmployees=this.loadEmployees();
  }

  validateLogin(){ 

    let validatedUser: User = this.userService.validateUser(this.newUsers);
    if(validatedUser.userType != "" ){
      this.authService.storeUser(validatedUser);
      this.authService.isLoggedIn = true;
    }
    if(validatedUser.userType == "employee" ){
      this.router.navigate(['menu']);
    }else if(validatedUser.userType == "manager" ){
      this.router.navigate(['menu']);
    }
  }
  
  validateLoginHTTP(){
   this.userService.validateUserHTTPService(this.newUser).subscribe(
      (response) =>{
        console.log(response);
        this.loadEmployees();
        this.router.navigate(['menu']);
        if(response.id != 0)
        {
          this.authService.storeUserEmployee(response)
          this.authService.isLoggedIn = true;
        }
        if(response.id == 1 ){
          this.router.navigate(['menu']);
        }else if(response.id == 2 ){
          this.router.navigate(['menu']);
        }
      },
      (error) =>{
        console.log(error);
        console.log("Wrong");
      }
    )

  }

  loadEmployees(): Employee[]{
    this.managerService.getAllEmployeeService().subscribe(
      (response)=>{
        console.log(response);               
         this.allEmployees=response;
         return response;
      },
      (error)=>{
        console.log(error);
      }
    );
    return this.allEmployees;
  }
}
