import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  USER_NAME_SESSION = 'lul';
  username: String;
  password: String;

  // Base url
  baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = new HttpHeaders({
    } )
  ;

  login(username: String, password: String) {
    return this.http.get(this.baseUrl ,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      console.log(this.username + " " + this.password);
      this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return false;
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return '';
    return user
  }

  // public login( userName: string, password: string){
  //   let loginUrl = this.baseurl + "/login";
  //   console.log(userName);
  //   console.log(password);
  //   console.log(btoa(userName + ":" + password));
  //   let response = this.http.post(loginUrl, {
  //     userName: userName,
  //     password: password
  //   }).subscribe(isValid => {
  //     if (isValid){
  //       sessionStorage.setItem(
  //         "token", btoa(userName + ':' + password)
  //       );
  //     } else {
  //       alert("Auth failed");
  //     }
  //   });
  //   return response;
  //
  // }

  public getUUID(){
    const headers = new HttpHeaders({'Content-Type' : 'application/json', 'Cache-Control': 'no-cache', 'Authorization': 'Basic ' + btoa('u' + ':' + 'p')});
    return this.http.get("http://localhost:8080/getUUID", {headers})
  }

}
