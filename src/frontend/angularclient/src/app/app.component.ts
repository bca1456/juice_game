import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juice_game';
  data: Object = {'id': 'qwe', 'message': 'Hello World'};
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/home').subscribe(data => this.data = data);
  }
}
