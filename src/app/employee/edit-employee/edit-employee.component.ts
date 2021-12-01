import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  updateInfo: Employee = {
    id: 0,
    userName: '',
    password:'',
    address:'',
    jobType:1
  }

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    //11/24/2021-- LEFT OFF HERE
  ngOnInit(): void {
    var receivedEmployeeId: any = this.activatedRoute.snapshot.paramMap.get("sentEmployeeId");
    console.log(receivedEmployeeId);
    this.employeeService.viewInfoService(receivedEmployeeId).subscribe(
      (response: any) => {
        this.updateInfo = response;
      },
      (error: any)=> {
        console.log(error);
      }
    );
  }

  editInfo(){
    this.employeeService.updateInfoService(this.updateInfo).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['employee-info']);
      },
      (error: any)=> {
        console.log(error);
      }
    );
  
  }
}
