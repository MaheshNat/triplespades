import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { SocketService } from '../socket.service';
export interface AuthResponseData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private socketService: SocketService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:5000/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          const user = new User(resData.email, resData.password, true);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.socketService.emit('join', user);
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      password: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    this.socketService.emit(
      'join',
      new User(userData.email, userData.password, true)
    );
    return this.login(userData.email, userData.password);
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
          this.socketService.emit(
            'leave',
            new User(resData.email, resData.password, false)
          );
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
      case 'ALREADY_AUTHENTICATED':
        errorMessage =
          'You are already logged in from another tab. Log out from another tab or close the current tab to continue.';
        break;
    }
    return throwError(errorMessage);
  }
}
