import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      url: `api/${req.url}`       // 添加默认api访问路径
    });
    return next.handle(cloneRequest).pipe(
      mergeMap((event: any) => {
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleHttpException(error);
      })
    );
  }

  private handleHttpException(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    switch (error.status) {
      case 401:
        if (this.router.url !== '/auth') {
          // 未登录，跳转到登录页
          this.router.navigateByUrl('/auth');
        }
        break;
    }
    // 最终将异常抛出来，便于组件个性化处理
    throw error;
  }

}
