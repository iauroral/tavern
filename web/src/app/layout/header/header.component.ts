import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../entity/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.me()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {}, () => {}, () => {
        this.router.navigateByUrl('/auth');
      });
  }

}
