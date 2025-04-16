import { Component } from '@angular/core';
import { JwtService } from './service/jwt.service'; // Adjust path
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  appName : string = "Dipti Singh";
  constructor(public jwtService: JwtService, private router: Router) {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['/login']);
  }
}
