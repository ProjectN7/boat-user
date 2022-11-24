import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './main-content/homepage/homepage.component';
import { LoginComponent } from './main-content/login/login.component';
import { RegistrationComponent } from './main-content/registrazione/registrazione.component';


const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "login" },
{ path: "home", component: HomepageComponent },
{ path: "registration", component: RegistrationComponent },
{ path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
