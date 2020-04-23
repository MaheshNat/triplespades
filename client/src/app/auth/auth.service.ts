import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

export interface AuthResponseData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:5000/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          const user = new User(resData.email, resData.password);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      password: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:5000/login', {
        email: userData.email,
        password: userData.password,
      })
      .pipe(
        catchError(this.handleError),
        tap(() => {
          const loadedUser = new User(userData.email, userData.password);
          this.user.next(loadedUser);
        })
      );
  }

  logout() {
    console.log('logout called');
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:5000/logout', {
        email: this.user.value.email,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.user.next(null);
          localStorage.removeItem('userData');
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error) return throwError(errorMessage);
    switch (errorRes.error) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect password.';
        break;
      case 'ROOM_FULL':
        errorMessage = 'The room is currently full.';
        break;
      case 'ALREADY_AUTHENTICATED':
        errorMessage =
          'You are already logged in from another tab. Log out from another tab or close the current tab to continue.';
        break;
    }
    return throwError(errorMessage);
  }
}
