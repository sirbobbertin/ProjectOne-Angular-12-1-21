import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee.model';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  allEmployees: Employee[]=[];



  constructor(private managerService: ManagerService,
              private router: Router) { }

  

  ngOnInit(): void {
    this.loadEmployees();
  }


  loadEmployees(){
    this.managerService.getAllEmployeeService().subscribe(
      (response)=>{
        this.allEmployees=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  viewEmployeeRoute(employeeId:number){
    this.router.navigate(['manager-view', employeeId])
  }
}
