import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimburstment } from '../reimburstment/reimburstment.model';
import { ReimburstmentService } from '../reimburstment/reimburstment.service';
import { AuthService } from '../users/auth.service';
@Component({
  selector: 'app-reimburstment-update',
  templateUrl: './reimburstment-update.component.html',
  styleUrls: ['./reimburstment-update.component.css']
})
export class ReimburstmentUpdateComponent implements OnInit {


  updateReimburstment: Reimburstment ={
    id: 0,
    status: 'PENDING',
    amount: 0.00,
    date:' ',
    sumbitDate:'NOW()',
    employeeId: 0//this.authService.retrieveUserEmployeeId()
  }

  constructor(private authService: AuthService,
             private activatedRoute: ActivatedRoute,
             private reimburstService: ReimburstmentService,
             private router: Router) { }

  ngOnInit(): void {
    var receivedReimburstId: any = this.activatedRoute.snapshot.paramMap.get("sentReimburstmentId");
    
    this.reimburstService.getAReimburstmentService(receivedReimburstId).subscribe(
      (response) => {
        this.updateReimburstment = response;
        console.log(response.id);
        this.updateReimburstment.id = receivedReimburstId;
        this.updateReimburstment.status = response.status;
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  decideReimburstment(){
    this.reimburstService.updateReimburstmentService(this.updateReimburstment).subscribe(
      (response) => {
        this.router.navigate(['reimburstment']);
      },
    (error) => {
      console.log(error);
    }
    );
  }

}
