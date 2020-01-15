import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{


  constructor(private authService: AuthService) { }

  ngOnInit(){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //нужно переделать все к jwt токенам
    //костыльная проверка авторизации
    console.log("this.authService.username: " + this.authService.username);
    console.log("this.authService.password: " + this.authService.password);
    console.log("this.authService.getLoggedInUserName: " + this.authService.getLoggedInUserName());
    console.log("this.authService.getLoggedInUsernamePassword: " + this.authService.getLoggedInUsernamePassword());
    console.log("this.authService.isUserLoggedIn: " + this.authService.isUserLoggedIn());
    console.log("this.authService.USER_NAME_SESSION: " + this.authService.USER_NAME_SESSION);
    if (this.authService.isUserLoggedIn()){
      //при авторизации в другом сервисе this.authService.username и this.authService.password становился undefined
      //костыль
      if (this.authService.username === undefined || this.authService.password === undefined){
        this.authService.username = this.authService.getLoggedInUserName();
        this.authService.password = this.authService.getLoggedInUsernamePassword();
      }
      const authReq = req.clone({
        setHeaders: {
         // 'Content-Type': 'application/json',
          'Authorization' : `Basic ${btoa(this.authService.username + ':' + this.authService.password)}`
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }



}
