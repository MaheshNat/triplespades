import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import{ UserService } from '../user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
   e.preventDefault();
   console.log(e);
   var username = e.target.elements[0].value;
   var password = e.target.elements[1].value;
   
   if(username == 'admin' && password == '12345!') {
      this.user.setUserLoggedIn();
    this.router.navigate(['Game']);
   }
  }

}
