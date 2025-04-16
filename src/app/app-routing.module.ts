import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent},
  // fallback route
  { path: '**', redirectTo: 'home' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
