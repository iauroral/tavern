import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../entity/user';

@Pipe({
  name: 'authority'
})
export class AuthorityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === User.ADMIN) {
      return '系统管理员';
    } else if (value === User.MANAGE) {
      return '酒店经理';
    } else if (value === User.FRONT) {
      return '酒店前台';
    } else {
      return '普通顾客';
    }
  }

}
