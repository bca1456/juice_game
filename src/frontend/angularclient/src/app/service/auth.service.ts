import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_NAME_SESSION = 'authenticated_user';
  PASSWORD_SESSION = 'authenticated_user_password';
  username: String;
  password: String;

  // Base url
  public baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  // Http Headers
  // httpOptions = new HttpHeaders({
  //   } )
  // ;

  login(username: String, password: String) {
    let response = this.http
                    .get(this.baseUrl ,
                {
                          headers:
                             { Authorization: this.createBasicAuthToken(username, password) }
                        });
    this.username = username;
    this.password = password;
    // console.log(this.username + " " + this.password);
    this.registerSuccessfulLogin(username, password);
    // console.log("auth login");
     console.log("AuthService: " +  response);
    return response;
  }

  createBasicAuthToken(username: String, password: String) {
    // console.log('Basic ' + window.btoa(username + ":" + password));
    return 'Basic ' + btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    localStorage.setItem(this.USER_NAME_SESSION, username);
    localStorage.setItem(this.PASSWORD_SESSION, password);
  }

  logout() {
    localStorage.removeItem(this.USER_NAME_SESSION);
    localStorage.removeItem(this.PASSWORD_SESSION);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = localStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return false;
    return true
  }

  getLoggedInUserName() {
    let user = localStorage.getItem(this.USER_NAME_SESSION);
    if (user === null) return '';
    return user
  }

  getLoggedInUsernamePassword(){
    let password = localStorage.getItem(this.PASSWORD_SESSION);
    if (password === null) return '';
    return password
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
