import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioneImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/gestione-imbarcazione.component';
import { InserimentoImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/inserimento-imbarcazione/inserimento-imbarcazione.component';
import { GestioneProfiloComponent } from './main-content/homepage/gestione-profilo/gestione-profilo.component';
import { HomepageComponent } from './main-content/homepage/homepage.component';
import { LoginComponent } from './main-content/login/login.component';
import { RegistrationComponent } from './main-content/registrazione/registrazione.component';


const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "login" },
{ path: "home", component: HomepageComponent },
{ path: "registration", component: RegistrationComponent },
{ path: "login", component: LoginComponent },
{ path: "home/gestione-imbarcazione", component: GestioneImbarcazioneComponent},
{ path: "gestione-imbarcazione/inserimento-imbarcazione", component: InserimentoImbarcazioneComponent},
{ path: "home/gestione-profilo", component: GestioneProfiloComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
