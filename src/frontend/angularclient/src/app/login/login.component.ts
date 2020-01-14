import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  errorMessage = "fuck u";

  response: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }

  doLogin(){
    this.response = this.authService.login(this.userName, this.password)
      .subscribe(
  data =>{

        },
  error=> {
          this.invalidLogin = true;
          this.loginSuccess = false;
          console.log("error: " + error);
        },
        () => {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          // this.router.navigate(['home']).then(() => {
          //   window.location.reload();
          // });
        });
    //console.log(this.response);
    // console.log("===login.component====");
    // console.log(this.userName);
    // console.log(this.password);
    // console.log("===login.component====");
    // console.log("response.subscribe: " + response);
  }

  ngOnInit() {
    localStorage.setItem('token', '');
  }

  ngOnDestroy() {
    this.response.unsubscribe();
  }

}
