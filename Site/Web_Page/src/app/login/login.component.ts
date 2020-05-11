import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit {
  constructor(private router:Router, private http: HttpClient) { }
    Login : any;
    Userdata:JSON;
  ngOnInit() {
    this.loginUser
  }
  loginUser() {
      this.http.get('http://127.0.0.1:5002/login').subscribe(data => {
        this.Userdata = data as JSON;
        console.log(this.Userdata);
    })
  }
}
