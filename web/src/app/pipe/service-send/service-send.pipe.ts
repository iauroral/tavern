import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceSend'
})
export class ServiceSendPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? '已服务' : '未服务';
  }

}
