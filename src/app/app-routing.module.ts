import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from './login.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { Error404Component } from './error404/error404.component';
import { GetUserByIdComponent } from './get-user-by-id/get-user-by-id.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "index", redirectTo: "" },
  { path: "users",canActivate:[LoginGuard],component: UsersComponent },
  { path: "GetUserById",canActivate:[LoginGuard], component: GetUserByIdComponent },
  { path: "AddUser", canActivate:[LoginGuard], component: AddUserComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
