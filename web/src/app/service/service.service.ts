import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../entity/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('service');
  }

  getServiceById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`service/${id}`);
  }

  save(service: Service): Observable<void> {
    return this.httpClient.post<void>('service', service);
  }

  update(id: number, service: Service): Observable<void> {
    return this.httpClient.put<void>(`service/${id}`, service);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`service/${id}`);
  }
}
