import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { Player } from '../shared/player.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  readonly EXPIRES_IN = 86400;
  readonly apiUrl = 'https://triple-spades.herokuapp.com';

  constructor(
    private http: HttpClient,
    private router: Router,
    private socketService: SocketService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<{ token: string; name: string }>(`${this.apiUrl}/login`, {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + this.EXPIRES_IN * 1000
          );
          const user = new User(
            resData.name,
            email,
            resData.token,
            expirationDate,
            true
          );
          this.user.next(user);
          this.autoLogout(this.EXPIRES_IN * 1000);
          localStorage.setItem('userData', JSON.stringify(user));
          this.socketService.emit('join', user.name);
          this.router.navigate(['/auth']);
        })
      );
  }

  autoLogin() {
    const userData: {
      name: string;
      email: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    const user = new User(
      userData.name,
      userData.email,
      userData._token,
      new Date(userData._tokenExpirationDate),
      true
    );
    if (user.token) {
      this.user.next(user);
      const expirationDate =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDate);
      this.socketService.emit('join', user.name);
      this.router.navigate(['/waiting-room']);
    }
  }

  logout() {
    return this.http
      .post<{ message: string }>(`${this.apiUrl}/logout`, {
        name: this.user.value.name,
        email: this.user.value.email,
        token: this.user.value.token,
      })
      .pipe(
        catchError(this.handleError),
        tap((message) => {
          const expirationDate = new Date(
            new Date().getTime() + this.EXPIRES_IN * 1000
          );
          const user = new User(
            this.user.value.name,
            this.user.value.email,
            null,
            expirationDate,
            false
          );
          this.socketService.emit('leave', user.name);
          this.user.next(null);
          localStorage.removeItem('userData');
          if (this.tokenExpirationTimer)
            clearTimeout(this.tokenExpirationTimer);
          this.tokenExpirationTimer = null;
          this.router.navigate(['/auth']);
        })
      );
  }

  autoLogout(expiresIn: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expiresIn);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    console.log(errorRes.error);
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
