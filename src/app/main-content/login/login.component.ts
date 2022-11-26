import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // creazione del form da utilizzare per i campi di input
  login: FormGroup;

  constructor(
    private router: Router,
    private gestisciUtenteService: GestisciUtenteService
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }


  submit() {
    console.log(this.login.value);
    this.router.navigateByUrl('home');
     //risultato visibile sulla console di google
    /*if (false) { // ora questo metodo non viene eseguito perché in quanto non è collegato al backend darebbe errore
      this.gestisciUtenteService.salvaUtente(this.login.value).then(res => {
        console.log('utente salvato');
        // la variabile "res" contiene la risposta dal BE contenente gli oggetti che manda
        // e lo status della risposta o gli eventuali  errori
      });
    }
    */

  }

  isInvalidSelection() {
    return this.login.value.sesso !== 'O' && this.login.value.sesso !== 'F' && this.login.value.sesso !== 'M'
  }

  goToRegistrationPage() {
    this.router.navigateByUrl('registration');
  }

}
