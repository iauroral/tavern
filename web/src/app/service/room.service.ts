import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../entity/room';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  getRoomByStatus(status: number): Observable<Array<Room>> {
    if (isNull(status)) {
      return this.httpClient.get<Array<Room>>('room/status');
    }
    // @ts-ignore
    return this.httpClient.get<Array<Room>>('room/status', { params: { status } });
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('room');
  }

  getRoomById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`room/${id}`);
  }

  clean(id: number): Observable<void> {
    return this.httpClient.post<void>(`room/clean/${id}`, {});
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
