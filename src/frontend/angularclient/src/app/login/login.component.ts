import { Component, OnInit } from '@angular/core';
import {RestapiService} from "../service/restapi.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restapiService: RestapiService) {
  }

  doLogin(){
    let response = this.restapiService.login(this.userName, this.password).subscribe(() =>{
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigateByUrl(this.restapiService.baseUrl + '/home');
    }, (errorMsg) => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      // this.errorMessage = errorMsg;
    });
    console.log(response);
    // console.log("===login.component====");
    // console.log(this.userName);
    // console.log(this.password);
    // console.log("===login.component====");
    // console.log("response.subscribe: " + response);
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

}
