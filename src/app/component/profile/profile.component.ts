import { Component } from '@angular/core';
import { JwtService } from '../../service/jwt.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})export class ProfileComponent {
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
          alert('Profile fetched successfully!');
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


  isEditing = false;
  editableProfile: any = {};

  toggleEdit() {
    this.isEditing = true;
    this.editableProfile = { ...this.profileData };
  }
  saveProfile() {
    this.service.updateProfile(this.editableProfile).subscribe(
      (response) => {
        alert('Profile updated successfully!');
        this.profileData = { ...this.editableProfile };
        this.isEditing = false;
        console.log('Updated response:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
      }
    );
  }
  

  cancelEdit() {
    this.isEditing = false;
  }
}
