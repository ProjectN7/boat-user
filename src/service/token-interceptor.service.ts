import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      ///

      let token = ''
      let jwttoken = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
      return next.handle(jwttoken)
  }
}
