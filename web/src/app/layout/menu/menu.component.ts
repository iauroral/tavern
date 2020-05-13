import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../entity/user';
import { Menu } from '../../target/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu> = new Array<Menu>();

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.me()
      .subscribe((user: User) => {
        if (user.authority === User.ADMIN) {
          this.menus.push(new Menu('员工信息管理', 'employee', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('顾客信息管理', 'customer', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('客房信息管理', 'room', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('餐饮信息管理', 'catering', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('服务信息管理', 'service', 'mdi mdi-home menu-icon'));
        } else if (user.authority === User.MANAGE) {
          this.menus.push(new Menu('客房订阅报表', '', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('消费订阅报表', '', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('查看员工信息', 'view/employee', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('查看客房信息', '', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('查看餐饮信息', '', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('查看产品信息', '', 'mdi mdi-home menu-icon'));
        } else if (user.authority === User.FRONT) {
          this.menus.push(new Menu('查看客房状态', 'room-status', 'mdi mdi-home menu-icon'));
          this.menus.push(new Menu('客户订单管理', '', 'mdi mdi-home menu-icon'));
        } else {
          this.menus.push(new Menu('我的订单', 'order', 'mdi mdi-home menu-icon'));
        }
      });
  }

  navigate(menu: Menu) {
    this.router.navigateByUrl(menu.url);
  }

}
