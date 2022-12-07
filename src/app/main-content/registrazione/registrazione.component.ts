import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrationComponent {
  
  rispostaBe: any;
  err: any;
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
      date_of_birth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      cf: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postal_code: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      boat_licence: new FormControl('', Validators.required),
    });

   }
  
  submit() {
    return this.gestisciUtenteService.registerUser(this.registration.value).subscribe({ 
      next: (rispostaBe) => {
        this.rispostaBe = rispostaBe.response;
        this.router.navigateByUrl("home");
      },
      error: (err) => {
        this.err = err.error;
      },
    });
  }


  goToLoginPage() {
    this.router.navigateByUrl('login');
  }

}
