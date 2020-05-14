import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? '已清理' : '未清理';
  }

}
