import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../../service/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../entity/user';
import { Room } from '../../../entity/room';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  private id: number;

  constructor(private builder: FormBuilder,
              private roomService: RoomService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.builder.group({
      number: ['', Validators.required],
      type: [0, Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.roomService.getRoomById(this.id)
      .subscribe((room: Room) => {
        this.form.patchValue({
          number: room.number,
          type: room.type,
          description: room.description,
          price: room.price
        });
      });
  }

  submit() {
    this.roomService.update(this.id, this.form.value)
      .subscribe(() => {
        alert('更新成功');
        this.router.navigateByUrl('room');
      });
  }

}
