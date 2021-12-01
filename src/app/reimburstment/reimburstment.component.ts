import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/auth.service';
import { Reimburstment } from './reimburstment.model';
import { ReimburstmentService } from './reimburstment.service';

@Component({
  selector: 'app-reimburstment',
  templateUrl: './reimburstment.component.html',
  styleUrls: ['./reimburstment.component.css']
})
export class ReimburstmentComponent implements OnInit {

  flag: boolean = false;

  allReimburst: Reimburstment[]=[];

  errorMsg: string = '';

  newReimburstment: Reimburstment = {
    id: 0,
    status: 'PENDING',
    amount: 0.00,
    date:'NOW()',
    sumbitDate:' ',
    employeeId: this.authService.retrieveUserEmployeeId()
  }

  constructor(private reimburstService: ReimburstmentService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    if(this.authService.retrieveUserEmployeeType()==1)
    {
      this.loadUserReimburstments();
      this.newReimburstment.employeeId = this.authService.retrieveUserEmployeeId();
    }
    else{ 
      this.loadReimburstments();
      this.newReimburstment.employeeId = this.authService.retrieveUserEmployeeId();
    }
   
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }
    else
    this.flag = true;
  }

  loadReimburstments(){
    this.reimburstService.getAllReimburstmentService().subscribe(
    (response)=>{
      console.log(response);
      this.allReimburst = response;
    },
    (error)=>{
      console.log(error);
      this.errorMsg = 'There was some internal error! Please try again later!';
      console.log(this.errorMsg);
    }
    );
  }

  loadUserReimburstments(){
    this.reimburstService.getAllUserReimburstmentService(this.authService.retrieveUserEmployeeId()).subscribe(
    (response)=>{
      console.log(response);
      this.allReimburst = response;
    },
    (error)=>{
      console.log(error);
      this.errorMsg = 'There was some internal error! Please try again later!';
      console.log(this.errorMsg);
    }
    );
  }

  addReimburstments(){
    this.reimburstService.addReimburstService(this.newReimburstment).subscribe(
      (response) =>{
        console.log(response);
        this.loadReimburstments();
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  ApproveReimburstmentRoute(reimburstmentId:number){
    this.router.navigate(['reimburstment-update', reimburstmentId])
  }
  retrieveUserEmployeeType(){
    return this.authService.retrieveUserEmployeeType();
  }
}
