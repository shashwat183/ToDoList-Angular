import { ApiAuthService } from './../services/api-auth/api-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  invalidData: boolean;
  user: SocialUser;
  loggedIn: boolean;
  loginForm = new FormGroup({
    username: new FormControl(null,
        Validators.required
      ),
    password: new FormControl(null,
      Validators.required
      )
  });

  constructor(private router: Router, private authService: AuthService, private apiAuthService: ApiAuthService) { }

  ngOnInit() {
      this.apiAuthService.subscribeToSocialAuth();
  }

  onSubmit(buttonType: string) {
    if (buttonType === 'google') {
      this.apiAuthService.signInWithGoogle();
      return;
    }
    if (buttonType === 'facebook') {
      this.apiAuthService.signInWithFb();
      return;
    }
    if (buttonType === 'register') {
      this.router.navigate(['register']);
      return;
    }
    if (buttonType === 'custom' && this.loginForm.invalid) {
      this.invalidData = true;
      return;
    } else {
      const loginData = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      };
      this.apiAuthService.customLogin(loginData).subscribe(data => {
        sessionStorage.setItem('userToken', data.token);
        this.router.navigate(['tasks']);
      }, error => {
        this.invalidData = true;
      });
    }
  }

}
