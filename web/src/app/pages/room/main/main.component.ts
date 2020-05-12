import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';
import { User } from '../../../entity/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

  delete(room: Room) {
    this.roomService.delete(room.id)
      .subscribe(() => {
        alert('删除成功');
        this.load();
      });
  }
}
