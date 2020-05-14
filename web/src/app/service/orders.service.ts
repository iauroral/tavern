import { Injectable } from '@angular/core';
import { Orders } from '../entity/orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Orders>> {
    return this.httpClient.get<Array<Orders>>('orders/custom');
  }

  save(orders: Orders): Observable<void> {
    return this.httpClient.post<void>('orders', orders);
  }
}
