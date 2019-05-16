import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'Javed';
    let password = 'ansari';
    let basicAuthString = 'Basic ' + window.btoa(username + ':' +password);
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthString
      }
    })

    return next.handle(request);
  }

  constructor() { }
}
