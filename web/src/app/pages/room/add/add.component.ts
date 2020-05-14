import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../../../service/room.service';
import { Room } from '../../../entity/room';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,
              private roomService: RoomService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({
      number: ['', Validators.required],
      type: [0, Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      status: Room.FREE,
      clean: true
    });
  }

  submit() {
    this.roomService.save(this.form.value)
      .subscribe(() => {
        alert('添加成功');
        this.router.navigateByUrl('room');
      });
  }

}
