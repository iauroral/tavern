import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdersServiceDetail } from '../entity/orders-service-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<OrdersServiceDetail>> {
    return this.httpClient.get<Array<OrdersServiceDetail>>('order-service');
  }

  send(id: number): Observable<void> {
    return this.httpClient.put<void>(`order-service/${id}`, {});
  }
}
