import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../entity/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  private id: number;

  constructor(private builder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      sex: [false, Validators.required],
      authority: [0, Validators.required]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id)
      .subscribe((user: User) => {
        this.form.patchValue({
          name: user.name,
          username: user.username,
          password: user.password,
          sex: user.sex,
          authority: user.authority
        });
      });
  }

  submit() {
    this.userService.update(this.id, this.form.value)
      .subscribe(() => {
        alert('更新成功');
        this.router.navigateByUrl('customer');
      });
  }

}
