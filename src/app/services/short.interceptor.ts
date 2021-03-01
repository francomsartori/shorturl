import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  token : string;
  constructor() {
    this.token = '';
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = '909436c9e26329867d7f5b217e4a5d3faca5be7b';
    request = request.clone({ setHeaders: { Authorization: 'Bearer ' + this.token } })
    return next.handle(request).pipe( catchError((error : HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
    }));
      
  }
}
