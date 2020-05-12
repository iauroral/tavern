import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  me(): Observable<User> {
    return this.httpClient.get<User>('user/me');
  }

  employee(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('user/employee');
  }

  customer(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('user/customer');
  }

  save(user: User): Observable<void> {
    return this.httpClient.post<void>('user', user);
  }

  update(id: number, user: User): Observable<void> {
    return this.httpClient.put<void>(`user/${id}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`user/${id}`);
  }
}
