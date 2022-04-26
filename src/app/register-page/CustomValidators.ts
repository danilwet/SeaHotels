import {AbstractControl, FormGroup, ValidatorFn} from "@angular/forms";

export function FirstSymbolUppercaseValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /^[А-Я]/.test(control.value)
    if(!valid)
    {
      return {'FirstSymbolShouldBeUppercase':true};
    }

    return null;
  };

}

export function AtLeastOneNumberValidator():ValidatorFn {

  return (control:AbstractControl): {[key:string] : boolean} | null => {
    const valid = /[0-9]/g.test(control.value)
    if(!valid)
    {
      return {'passwordShouldContainAtLeastOneNumber':true};
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

export  function MustMatch(controlName: string, matchingControlName: string) {
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
