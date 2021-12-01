import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  displayUser: String = this.authService.retrieveUserName();

  ngOnInit(): void {
  }

}
