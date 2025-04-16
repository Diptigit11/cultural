import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

  constructor(
    private service:  JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
 this.loginForm = this.fb.group({
      email: ['',Validators.required,Validators.email],
      password: ['',Validators.required]
    });

  }

  submitForm() {
    console.log(this.loginForm?.value);
    this.service.login(this.loginForm?.value).subscribe(
      (response) => {
        console.log('Raw response:', response);
        
        if (response && typeof response === 'string' && !response.includes('Invalid')) {
          alert('Login successful!');
          localStorage.setItem('jwt', response);  // Save directly
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid email or password');
        }
      }
    );
    
  }

}
