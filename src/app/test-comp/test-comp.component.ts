import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormBuilder, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit{

  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
        user:new FormControl('',[Validators.required,Validators.minLength(2),
          Validators.pattern("^([а-яА-Яё\\s]+)$"),abc()]),
        password: new FormControl('', [Validators.required, AtLeastOneNumberValidator(),
          AtLeastOneLowerCaseValidator(), AtLeastOneUpperCaseValidator(), AtLeastOneSpecialSymbolValidator()]),
        repeatPassword:new FormControl('',[Validators.required,]),
      },
      {validators: this.MustMatch('password','repeatPassword')
      });
  }






  ngOnInit(): void {
  }

  get user() {

    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password')
  }

  get repeatPassword() {
    return this.loginForm.get('repeatPassword')
  }

  get f(){return this.loginForm.controls}

  MustMatch(controlName: string, matchingControlName: string) {
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }



}

export function abc():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /^[А-Я]/.test(control.value)
    if(!valid)
    {
      return {'abc':true};
    }

    return null;
  };

}

export function AtLeastOneNumberValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /[0-9]/g.test(control.value)
    if(!valid)
    {
      return {'numberError':true};
    }

    return null;
  };

}

export function AtLeastOneLowerCaseValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /[a-z]/g.test(control.value)
    if(!valid)
    {
      return {'lowerCaseError':true};
    }

    return null;
  };

}

export function AtLeastOneUpperCaseValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /[A-Z]/g.test(control.value)
    if(!valid)
    {
      return {'upperCaseError':true};
    }

    return null;
  };

}

export function AtLeastOneSpecialSymbolValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /[\!\@\#\$\%\^\&\*]/g.test(control.value)
    if(!valid)
    {
      return {'specialSymbolError':true};
    }

    return null;
  };

}

