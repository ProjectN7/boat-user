import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main-content/login/login.component';
import { RegistrationComponent } from './main-content/registrazione/registrazione.component';
import { GestioneImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/gestione-imbarcazione.component';
import { GestioneProfiloComponent } from './main-content/homepage/gestione-profilo/gestione-profilo.component';
import { InserimentoImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/inserimento-imbarcazione/inserimento-imbarcazione.component';
import { ModificaImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/modifica-imbarcazione/modifica-imbarcazione.component';
import { PrenotazioneBanchinaComponent } from './main-content/homepage/gestione-banchina/prenotazione-banchina/prenotazione-banchina.component';
import { DisdettaBanchinaComponent } from './main-content/homepage/gestione-banchina/disdetta-banchina/disdetta-banchina.component';
import { ModificaProfiloComponent } from './main-content/homepage/gestione-profilo/modifica-profilo/modifica-profilo.component';
import { ReimpostazioneCredenzialiComponent } from './main-content/homepage/gestione-profilo/reimpostazione-credenziali/reimpostazione-credenziali.component';
import { CancellazioneImbarcazioneComponent } from './main-content/homepage/gestione-imbarcazione/cancellazione-imbarcazione/cancellazione-imbarcazione.component';
import { RichiestaServiziComponent } from './main-content/homepage/richiesta-servizi/richiesta-servizi.component';
import { ManutenzioneComponent } from './main-content/homepage/richiesta-servizi/manutenzione/manutenzione.component';
import { PulizieComponent } from './main-content/homepage/richiesta-servizi/pulizie/pulizie.component';
import { RifornimentoComponent } from './main-content/homepage/richiesta-servizi/rifornimento/rifornimento.component';
import { GestioneBanchinaComponent } from './main-content/homepage/gestione-banchina/gestione-banchina.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    GestioneImbarcazioneComponent,
    GestioneProfiloComponent,
    InserimentoImbarcazioneComponent,
    ModificaImbarcazioneComponent,
    PrenotazioneBanchinaComponent,
    DisdettaBanchinaComponent,
    ModificaProfiloComponent,
    ReimpostazioneCredenzialiComponent,
    CancellazioneImbarcazioneComponent,
    RichiestaServiziComponent,
    ManutenzioneComponent,
    PulizieComponent,
    RifornimentoComponent,
    GestioneBanchinaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
