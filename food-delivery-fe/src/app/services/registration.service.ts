import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = "http://localhost:9091/api";

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  getUserByEmail(email: String): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${email}`);
  }
}

