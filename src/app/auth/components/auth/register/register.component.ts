import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../utils/passwordValidators';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registerForm: FormGroup;
constructor(private formBuilder : FormBuilder){
  this.registerForm = this.formBuilder.group(
    {
    name:['',[Validators.required , Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]], 
  password: ['', [Validators.required, Validators.minLength(6)]], 
  confirmPassword: ['', [Validators.required]] ,
  },
  {validators: passwordMatchValidator}
);
}

registerSubmit() {
  if (this.registerForm.valid) {
//it will return true when all the validations are verified including
// angular (length, reuqired, email) and custom (pasword matching)
    console.log( 'Success ' + this.registerForm.value);
    //this will not be able to print the object, so write the following code
    console.log( 'Success ' + JSON.stringify(this.registerForm.value));
  } else {
    console.log(this.registerForm.errors);
    this.printErrors();
  }
}
printErrors() {
  const controls = this.registerForm.controls;
  // am I accessing / trying to get controlelrs array
  for (const controllerName in controls) {
  const control = controls[controllerName];
  if (control.invalid && control.touched) {
  const errors = control.errors;
  if (errors) {
  console.log(`${controllerName} has the following errors:`);
  for (const error in errors) {
  console.log(`- ${error}: ${JSON.stringify(errors[error])}`);
  }
  }
  }
  }
  }
  

}

