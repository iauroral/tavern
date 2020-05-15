import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdersCateringDetail } from '../entity/orders-catering-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderCateringService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<OrdersCateringDetail>> {
    return this.httpClient.get<Array<OrdersCateringDetail>>('order-catering');
  }

  send(id: number): Observable<void> {
    return this.httpClient.put<void>(`order-catering/${id}`, {});
  }
}
