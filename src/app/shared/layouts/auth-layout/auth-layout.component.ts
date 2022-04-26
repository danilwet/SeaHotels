import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirstSymbolUppercaseValidator} from "../../../register-page/CustomValidators";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.minLength(2),
      Validators.pattern("а-яА-Я"),FirstSymbolUppercaseValidator()]),
    password:new FormControl(''),
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }

  get user()
  {
    return this.loginForm.get('user');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

}
