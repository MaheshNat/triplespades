import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.authService
      .register(form.value.name, form.value.email, form.value.password)
      .subscribe(
        (resData) => {
          this.isLoading = false;
          this.router.navigate(['/waiting-room']);
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
  }
}
