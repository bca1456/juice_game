import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RestapiService} from "../service/restapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Juice_game';
  greeting = {};

  constructor(private restapiService: RestapiService, private http: HttpClient) {
    let response = restapiService.getUUID();
    console.log("===home.component===");
    console.log(response)
    console.log("===home.component===");
    // http.get('http://localhost:8080/home').subscribe(data => this.greeting = data);
  }

  //authenticated() { return this.loginService.authenticated; }

  ngOnInit() {}
}
