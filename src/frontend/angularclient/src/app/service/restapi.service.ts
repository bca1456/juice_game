import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  public login( userName: string, password: string){
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(userName + ":" + password)});
    return this.http.get("http://localhost:8080/", {headers, responseType:'text' as 'json'})
  }


  public getUUID(){
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa("u" + ":" + "p")});
    return this.http.get("http://localhost:8080/getUUID", {headers})
  }
}
