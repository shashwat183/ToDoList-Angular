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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      if (this.user != null) {
        this.authService.signOut();
        this.user = null;
      }
    });
  }

  onSubmit(buttonType: string) {
    if (this.loginForm.invalid) {
      this.invalidData = true;
      return;
    }
    if (buttonType === 'google') {
      this.signInWithGoogle();
    }
    if (buttonType === 'facebook') {
      this.signInWithFb();
    }
    this.router.navigate(['/tasks']);
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
