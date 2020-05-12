import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private addForm: FormGroup;

  constructor(private builder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.addForm = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      sex: [false, Validators.required],
      authority: [1, Validators.required]
    });
  }

  submit() {
    this.userService.save(this.addForm.value)
      .subscribe(() => {
        alert('添加成功');
        this.router.navigateByUrl('employee');
      });
  }

}
