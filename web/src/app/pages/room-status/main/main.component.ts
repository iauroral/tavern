import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  rooms: Array<Room> = new Array<Room>();

  form: FormGroup;

  constructor(private roomService: RoomService,
              private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      status: null
    });
    this.submit();
  }

  submit() {
    this.roomService.getRoomByStatus(this.form.value.status)
      .subscribe((rooms: Array<Room>) => {
        this.rooms = rooms;
      });
  }

  clean(room: Room) {
    this.roomService.clean(room.id)
      .subscribe(() => {
        alert('状态更新成功');
        this.submit();
      });
  }

}
