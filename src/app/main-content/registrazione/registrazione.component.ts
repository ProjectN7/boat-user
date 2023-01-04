import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';
import { User } from './users/user';

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
  submitted = false;

  constructor(
    private router: Router,
    private gestisciUtenteService: GestisciUtenteService
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    this.registration = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      surname: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('',Validators.required),
      gender: new FormControl(''),
      nationality: new FormControl('',Validators.required),
      cf: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      boatLicence: new FormControl('', Validators.required),
    });

   }



  submit() {
    console.log(this.registration.value)
    return this.gestisciUtenteService.registerUser(this.registration.value).subscribe({ 
      next: (rispostaBe) => {
        this.rispostaBe = rispostaBe.response;
        alert(this.rispostaBe)
        this.router.navigateByUrl('/login')
      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err)
      },
    });
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

}
