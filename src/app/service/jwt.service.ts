import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/employe/'; // ✅ was an array, now a string

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) {}

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'register', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest, {
      responseType: 'text'
    });
  }

  getProfile(): Observable<any> {
    return this.http.get(BASE_URL + 'me', {
      headers: this.createAuthorizationHeader() || new HttpHeaders()
    })
  }

   private createAuthorizationHeader(): HttpHeaders | null {
  const jwtToken = localStorage.getItem('jwt');
  if (jwtToken) {
    console.log(' found JWT Token from storage:', jwtToken);
    return new HttpHeaders().set(
      "Authorization", "Bearer " + jwtToken
    );
  } else {
    console.log(' no found JWT Token from storage');
  }
  return null;
}

updateProfile(profileData: any): Observable<any> {
  return this.http.put(BASE_URL + 'update-profile', profileData, {
    headers: this.createAuthorizationHeader() || new HttpHeaders()
  });
}


isLoggedIn(): boolean {
  return !!localStorage.getItem('jwt');
}

logout(): void {
  localStorage.removeItem('jwt');
  console.log('JWT token removed. Logged out!');
}

}
