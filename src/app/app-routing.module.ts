import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioneImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/gestione-imbarcazione.component';
import { InserimentoImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/inserimento-imbarcazione/inserimento-imbarcazione.component';
import { DisdettaBanchinaComponent } from './main-content/homepage/gestione-banchina/disdetta-banchina/disdetta-banchina.component';
import { ModificaImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/modifica-imbarcazione/modifica-imbarcazione.component';
import { GestioneProfiloComponent } from './main-content/homepage/gestione-profilo/gestione-profilo.component';
import { HomepageComponent } from './main-content/homepage/homepage.component';
import { LoginComponent } from './main-content/login/login.component';
import { RegistrationComponent } from './main-content/registrazione/registrazione.component';
import { ModificaProfiloComponent } from './main-content/homepage/gestione-profilo/modifica-profilo/modifica-profilo.component';
import { ReimpostazioneCredenzialiComponent } from './main-content/homepage/gestione-profilo/reimpostazione-credenziali/reimpostazione-credenziali.component';
import { CancellazioneImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/cancellazione-imbarcazione/cancellazione-imbarcazione.component';
import { RichiestaServiziComponent } from './main-content/homepage/richiesta-servizi/richiesta-servizi.component';
import { PrenotazioneBanchinaComponent } from './main-content/homepage/gestione-banchina/prenotazione-banchina/prenotazione-banchina.component';
import { GestioneBanchinaComponent } from './main-content/homepage/gestione-banchina/gestione-banchina.component';
import { RichiestaTicketComponent } from './main-content/homepage/richiesta-servizi/richiesta-ticket/richiesta-ticket.component';
import { DisdettaTicketComponent } from './main-content/homepage/richiesta-servizi/disdetta-ticket/disdetta-ticket.component';


const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "login" },
{ path: "home", component: HomepageComponent, },
{ path: "registration", component: RegistrationComponent, },
{ path: "login", component: LoginComponent, },

{ path: "home/gestione-imbarcazione", component: GestioneImbarcazioneComponent},
{ path: "home/gestione-banchina", component: GestioneBanchinaComponent},
{ path: "home/gestione-profilo", component: GestioneProfiloComponent},
{ path: "home/richiesta-servizi", component: RichiestaServiziComponent},
{ path: "home/richiesta-servizi/richiesta-ticket", component: RichiestaTicketComponent},
{ path: "home/richiesta-servizi/disdetta-ticket", component: DisdettaTicketComponent},

{ path: "home/gestione-imbarcazione/inserimento-imbarcazione", component: InserimentoImbarcazioneComponent},
{ path: "home/gestione-imbarcazione/modifica-imbarcazione", component: ModificaImbarcazioneComponent},
{ path: "home/gestione-imbarcazione/cancellazione-imbarcazione", component: CancellazioneImbarcazioneComponent},
{ path: "home/gestione-banchina/prenotazione-banchina", component: PrenotazioneBanchinaComponent},
{ path: "home/gestione-banchina/disdetta-banchina", component: DisdettaBanchinaComponent},
{ path: "home/gestione-profilo/modifica-profilo", component: ModificaProfiloComponent},
{ path: "home/gestione-profilo/reimpostazione-credenziali", component: ReimpostazioneCredenzialiComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
