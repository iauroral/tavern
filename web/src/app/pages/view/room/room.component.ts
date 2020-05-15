import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Array<Room> = new Array<Room>();

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.roomService.getAll()
      .subscribe((data: any) => {
        this.rooms = data._embedded.rooms;
      });
  }

}
