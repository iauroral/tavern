import { Injectable } from '@angular/core';
import { Orders } from '../entity/orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderTarget } from '../target/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getCustomAll(): Observable<Array<Orders>> {
    return this.httpClient.get<Array<Orders>>('orders/custom');
  }

  save(order: OrderTarget): Observable<void> {
    return this.httpClient.post<void>('orders', order);
  }
}