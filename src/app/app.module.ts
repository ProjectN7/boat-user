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



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    GestioneImbarcazioneComponent,
    GestioneProfiloComponent,
    InserimentoImbarcazioneComponent
    
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
