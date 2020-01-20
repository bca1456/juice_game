import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {LogoutComponent} from "./logout/logout.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CrudComponent} from "./crud/crud.component";
import {HeroComponent} from "./game/hero/hero.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'hero', component: HeroComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
