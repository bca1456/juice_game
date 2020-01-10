import { Component, OnInit } from '@angular/core';
import {RestapiService} from "../service/restapi.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private restapiService: RestapiService) { }

  ngOnInit() {
    this.isLoggedIn = this.restapiService.isUserLoggedIn();
    console.log('app-header -> isLoggedIn: ' + this.isLoggedIn);
  }

  doLogout() {
    this.restapiService.logout();
  }
}
