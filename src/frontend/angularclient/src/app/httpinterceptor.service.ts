import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestapiService} from "./service/restapi.service";

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor(private restapiService: RestapiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.restapiService.isUserLoggedIn()){
      const authReq = req.clone({
        headers: new HttpHeaders({
         // 'Content-Type': 'application/json',
          'Authorization' : `Basic ${btoa(this.restapiService.username + ':' + this.restapiService.password)}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }



}
