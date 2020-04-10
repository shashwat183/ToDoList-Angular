import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiAuthService } from '../services/api-auth/api-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidData: boolean;
  registerForm = new FormGroup({
    firstName: new FormControl(null,
      Validators.required
      ),
    lastName: new FormControl(null,
      Validators.required
      ),
    emailAddress: new FormControl(null,
      [Validators.email,
        Validators.required]
      ),
    username: new FormControl(null,
      Validators.required
      ),
    password: new FormControl(null,
      Validators.required
      )
  });
  constructor(private apiAuthService: ApiAuthService, private router: Router) { }

  ngOnInit() {
    this.invalidData = false;
  }

  onSubmit(buttonType: string) {
    if (this.registerForm.invalid) {
      this.invalidData = true;
      return;
    } else {
      this.invalidData = false;
    }
    const userData = {
      first_name: this.registerForm.controls.firstName.value,
      last_name: this.registerForm.controls.lastName.value,
      email: this.registerForm.controls.emailAddress.value,
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value
    };
    this.apiAuthService.register(userData).subscribe(data => {
      console.log(data);
      this.router.navigate(['home']);
    });
  }

}
