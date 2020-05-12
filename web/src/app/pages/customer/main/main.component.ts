import { Component, OnInit } from '@angular/core';
import { User } from '../../../entity/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.userService.customer()
      .subscribe((users: Array<User>) => {
        this.users = users;
      });
  }

  delete(user: User) {
    this.userService.delete(user.id)
      .subscribe(() => {
        alert('删除成功');
        this.load();
      });
  }

}
