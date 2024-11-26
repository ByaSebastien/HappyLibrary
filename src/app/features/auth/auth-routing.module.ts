import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {anonymousGuard} from "../../shared/guards/anonymous.guard";

const routes: Routes = [
  { path: 'register', component: RegisterComponent , canActivate: [anonymousGuard]},
  { path: 'login', component: LoginComponent, canActivate: [anonymousGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
