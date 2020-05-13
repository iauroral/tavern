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
  }

  submit() {

  }

}
