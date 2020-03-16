import { ApiAuthService } from '../api-auth/api-auth.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksAuthGuardService implements CanActivate {

  constructor(private apiAuthService: ApiAuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.apiAuthService.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
