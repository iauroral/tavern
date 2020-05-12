import { Component, OnInit } from '@angular/core';
import { User } from '../../../entity/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.employee()
      .subscribe((users: Array<User>) => {
        this.users = users;
      });
  }

}
