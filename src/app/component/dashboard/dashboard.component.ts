import { Component } from '@angular/core';
import { JwtService } from '../../service/jwt.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
profileData: any;

  constructor(private service: JwtService) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.getProfile().subscribe(
      (response) => {
        console.log('Raw response:', response);
        if (response && typeof response === 'object') {
          this.profileData = response;
        } else {
          alert('Failed to fetch profile data');
        }
      },
      (error) => {
        console.error('Error fetching profile:', error);
        alert('Error fetching profile data');
      }
    );
  }


}
