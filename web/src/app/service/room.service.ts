import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../entity/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('room');
  }

  getRoomById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`room/${id}`);
  }

  save(room: Room): Observable<void> {
    return this.httpClient.post<void>('room', room);
  }

  update(id: number, room: Room): Observable<void> {
    return this.httpClient.put<void>(`room/${id}`, room);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`room/${id}`);
  }
}
