import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./service/auth.service";
import {HttpinterceptorService} from "./httpinterceptor.service";
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrudComponent } from './crud/crud.component';
import {CrudService} from "./service/crud/crud.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './game/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    CrudComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:
    [
      CrudService,
      AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpinterceptorService,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


