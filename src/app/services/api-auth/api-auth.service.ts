import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { API_URL } from '../../env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  googleLogin(token): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-GOOGLE_TOKEN': token
      })
    };
    return this.http.get<any>(`${API_URL}/login/google`, httpOptions);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('userToken');
    return !jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    this.authService.signOut();
    sessionStorage.removeItem('userToken');
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  subscribeToSocialAuth(): void {
    this.authService.authState.subscribe((user) => {
      if (user != null) {
        console.log(user);
        this.login(user.idToken, user.provider);
      }
    });
  }

  private login(idToken: string, provider: string): void {
    if (provider === 'GOOGLE') {
      this.googleLogin(idToken).subscribe(data => {
        sessionStorage.setItem('userToken', data['token']);
        this.router.navigate(['tasks']);
      });
    }
  }
}
