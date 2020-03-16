import { ApiAuthService } from './../api-auth/api-auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeAuthGuardService implements CanActivate {

  constructor(private apiAuthService: ApiAuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.apiAuthService.isAuthenticated()) {
      this.router.navigate(['tasks']);
      return false;
    }
    return true;
  }
}
