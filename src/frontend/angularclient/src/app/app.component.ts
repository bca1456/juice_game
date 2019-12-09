import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RestapiService} from "./service/restapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juice_game';
  data:  {'id': 'qwe', 'message': 'Hello World'};

  constructor(private restapiService: RestapiService,
              private http: HttpClient,
              private router: Router) {
    //this.restapiService.authenticate(undefined, undefined);
  }
  // logout() {
  //   this.http.post('http://localhost:8080/logout', {}).subscribe(() => {
  //     this.restapiService.authenticated = false;
  //     this.router.navigateByUrl('/login');
  //   });
  // }
}
