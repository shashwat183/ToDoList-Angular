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
    emailAddress: new FormControl(null,
      [Validators.email,
        Validators.required]
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
    // if (this.loginForm.invalid) {
    //   this.invalidData = true;
    //   return;
    // }
    if (buttonType === 'google') {
      this.apiAuthService.signInWithGoogle();
    }
    if (buttonType === 'facebook') {
      this.apiAuthService.signInWithFb();
    }
    // this.router.navigate(['/tasks']);
  }

}
