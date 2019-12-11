import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  public login( userName: string, password: string){
    //this.loadToken();
    let headers = new HttpHeaders({
      // 'Access-Control-Allow-Origin' : 'http://localhost:8080',
      // 'Content-Type' : 'application/json',
      // 'Cache-Control': 'no-cache',
      'Authorization': 'Basic '+ btoa(userName + ":" + password),

    });
    // //headers.append('Access-Control-Allow-Headers', '*');
    // headers.append('Authorization', 'Basic');
    //headers.append(userName, password);
    // headers.append(userName, password);
    console.log(headers.get('Authorization'));
    console.log(userName);
    console.log(password);
    console.log(btoa(userName + ":" + password));
    //console.log(btoa(userName));
    let options = {
      headers: headers,
      responseType:'text' as 'json'
    };
    return this.http.get("//localhost:8080", options)
  }

  public getUUID(){
    const headers = new HttpHeaders({'Content-Type' : 'application/json', 'Cache-Control': 'no-cache', 'Authorization': 'Basic ' + btoa("u" + ":" + "p")});
    return this.http.get("http://localhost:8080/getUUID", {headers})
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    console.log(token);
    this.authToken = token;
  }
}
