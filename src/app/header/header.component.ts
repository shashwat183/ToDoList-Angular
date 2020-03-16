import { ApiAuthService } from './../services/api-auth/api-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiAuthService: ApiAuthService) { }

  ngOnInit() {
  }

  checkAuthenticated(): boolean {
    return this.apiAuthService.isAuthenticated();
  }

  userLogout(): void {
    this.apiAuthService.logout();
  }

}
