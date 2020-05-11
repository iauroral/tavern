import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<void> {
    return this.httpClient.post<void>('user/login', credentials);
  }

  logout(): Observable<void> {
    return this.httpClient.get<void>('user/logout');
  }
}
