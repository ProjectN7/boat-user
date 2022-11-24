import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrationComponent implements OnInit {

  // creazione del form da utilizzare per i campi di input
  registration: FormGroup;

  constructor(
    private router: Router,
    private gestisciUtenteService: GestisciUtenteService
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    this.registration = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      cf: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      cap: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      boat_licence: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }


  submit() {
    console.log(this.registration.value); //risultato visibile sulla console di google
    if (false) { // ora questo metodo non viene eseguito perché in quanto non è collegato al backend darebbe errore
      this.gestisciUtenteService.salvaUtente(this.registration.value).then(res => {
        console.log('utente salvato');
        // la variabile "res" contiene la risposta dal BE contenente gli oggetti che manda
        // e lo status della risposta o gli eventuali  errori
      });
    }
  
  }

  /* Al momento non funziona
  isInvalidSelection() {
    return this.registration.value.sesso !== 'O' && this.registration.value.sesso !== 'F' && this.registration.value.sesso !== 'M'
  }
  */

  goToLoginPage() {
    this.router.navigateByUrl('login');
  }

}
