import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {routes} from '../../../consts';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/dist/types';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  public routers: typeof routes = routes;

  constructor(private router: Router,
              private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let cloneReq;

    if (token) {
      cloneReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
    }

    const handler: Observable<any> = next.handle(token ? cloneReq : req).pipe(shareReplay());

    handler.toPromise().then().catch(event => {
      if (event instanceof HttpErrorResponse && (event.status === 401 || event.status === 403)){
        this.authService.signOut();
        this.router.navigate([this.routers.LOGIN]).then();
      }
    });
    return handler;
  }

}
