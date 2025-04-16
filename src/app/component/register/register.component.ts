import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
constructor(
  private service : JwtService,
  private fb:FormBuilder,
    private router: Router
){}


ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      collegeName: ['', [Validators.required]],
      degree : ['', [Validators.required]],
      yearOfStudy: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]]
     
    });
}

submitForm() {
  console.log(this.registerForm?.value);
this.service.register(this.registerForm?.value).subscribe(
  (response) => {
    console.log('Raw response:', response);
    
    if (response && response.token) {
      alert('Registration successful!');
      localStorage.setItem('jwt', response.token);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid registration response');
    }
  }
)
}
}
