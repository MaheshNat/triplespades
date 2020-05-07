import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import{ UserService } from '../user.service'
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { login } from './login.module'

@Component({
  selector: 'app-login-form',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit {
  constructor(private router:Router, private user:UserService, private http: HttpClient) { }
    Login : any;
  ngOnInit() {
    this.loginUser
  }

  loginUser() {
    this.Login = this.http.get<login[]>('http://127.0.0.1:5000/login');
    this.Login.subscribe((resData) => {
      console.log(resData);
    });
  }
  onSubmitForm(insertForm: NgForm) {
    this.http
      .post<{ message: string }>('http://127.0.0.1:5000/login', {
        name: insertForm.value.name,
        description: insertForm.value.description,
      })
      .subscribe((response) => {
        console.log(response);
        this.loginUser();
      });
  } 

   }
