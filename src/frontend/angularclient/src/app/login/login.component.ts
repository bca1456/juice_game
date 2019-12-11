import { Component, OnInit } from '@angular/core';
import {RestapiService} from "../service/restapi.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private restapiService: RestapiService) {
  }

  doLogin(){
    let response = this.restapiService.login(this.userName, this.password);
    console.log("===login.component====");
    console.log(this.userName);
    console.log(this.password);
    console.log("===login.component====");
    response.subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
