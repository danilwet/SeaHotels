import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../_services/auth.service';
import {
  AtLeastOneLowerCaseValidator,
  AtLeastOneNumberValidator, AtLeastOneSpecialSymbolValidator, AtLeastOneUpperCaseValidator,
  FirstSymbolUppercaseValidator, MustMatch
} from "./CustomValidators";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm:FormGroup;

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      user:new FormControl('',[Validators.required, Validators.minLength(2),
        Validators.maxLength(15)]),
      password:new FormControl('',[Validators.required, Validators.minLength(8),
        Validators.maxLength(30), AtLeastOneNumberValidator(), AtLeastOneLowerCaseValidator(),
        AtLeastOneUpperCaseValidator(), AtLeastOneSpecialSymbolValidator()]),
      repeatPassword:new FormControl(''),
      userName:new FormControl('',[Validators.required, Validators.minLength(2),
        Validators.pattern("^([а-яА-ЯёЁ\\s]+)$"),FirstSymbolUppercaseValidator()]),
      userSurname:new FormControl('',[Validators.required, Validators.minLength(2),
        Validators.pattern("^([а-яА-ЯёЁ\\s]+)$"),FirstSymbolUppercaseValidator()]),
      email:new FormControl(''),
    },{validators: MustMatch('password','repeatPassword')})
  }

  ngOnInit(): void {
  }

  get user() {
    return this.registerForm.get('user')
  }

  get userName() {
    return this.registerForm.get('userName')
  }

  get userSurname() {
    return this.registerForm.get('userSurname')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get f(){return this.registerForm.controls}

  registerUser() {

    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

  }


}
