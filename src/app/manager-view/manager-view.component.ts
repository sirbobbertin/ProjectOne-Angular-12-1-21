import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../manager/manager.service';
import { Reimburstment } from '../reimburstment/reimburstment.model';
import { ReimburstmentService } from '../reimburstment/reimburstment.service';
import { AuthService } from '../users/auth.service';
@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {

  constructor(private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private managerService: ManagerService,
    private reimburstService: ReimburstmentService,
    private router: Router) { }

    employeeView: Reimburstment[] = [];

    updateReimburstment: Reimburstment ={
      id: 0,
      status: 'PENDING',
      amount: 0.00,
      date:' ',
      sumbitDate:'NOW()',
      employeeId: 0
    }

  ngOnInit(): void {
    var receivedEmployeeId: any = this.activatedRoute.snapshot.paramMap.get("sentEmployeeId");
    
    this.reimburstService.getAllUserReimburstmentService(receivedEmployeeId).subscribe(
      (response) => {
        console.log(response);
        this.employeeView = response;
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  // decideReimburstment(){
  //   this.reimburstService.updateReimburstmentService(this.updateReimburstment).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.router.navigate(['reimburstment']);
  //     },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  // }
  ApproveReimburstmentRoute(reimburstmentId:number){
    this.router.navigate(['reimburstment-update', reimburstmentId])
  }

}
