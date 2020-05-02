import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  title='login'
  loginform:any

  constructor(private formbuilder : FormBuilder) {
    this.loginform=this.formbuilder.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength (6)]]
    })
    console.log(this.loginform)
   }
   saveUser(){
    if (this.loginform.dirty && this.loginform.valid){
      alert('email : $(this.loginform.value.email) pass : $()this.loginform.value.password')
    }
  }
  ngOnInit(): void {
  }

}
