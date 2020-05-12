import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catering } from '../entity/catering';

@Injectable({
  providedIn: 'root'
})
export class CateringService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('catering');
  }

  getCateringById(id: number): Observable<Catering> {
    return this.httpClient.get<Catering>(`catering/${id}`);
  }

  save(catering: Catering): Observable<void> {
    return this.httpClient.post<void>('catering', catering);
  }

  update(id: number, catering: Catering): Observable<void> {
    return this.httpClient.put<void>(`catering/${id}`, catering);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`catering/${id}`);
  }
}
