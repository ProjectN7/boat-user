import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';

@Component({
  selector: 'app-modifica-profilo',
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent implements OnInit {

  rispostaBe: any;
  err: any;
  // creazione del form da utilizzare per i campi di input
  modification: FormGroup;
  submitted = false;
  localcf = sessionStorage.getItem("cf");


  ngOnInit(): void {
    this.getUserData(this.localcf);
   }

  constructor(
    private router: Router,
    private gestisciUtenteService: GestisciUtenteService
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    this.modification = new FormGroup({
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
    console.log(this.modification.value)
    return this.gestisciUtenteService.modifyUser(this.modification.value).subscribe({ 
      next: (rispostaBe) => {
        this.rispostaBe = rispostaBe.response;
        alert(this.rispostaBe)
        this.router.navigateByUrl('home/gestione-profilo');
      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err)
      },
    });
  }



  goToLoginPage() {
    this.router.navigateByUrl('login');
  }

  getUserData(cf: any){
    return this.gestisciUtenteService.getUserDataService(cf).subscribe({ 
      next: (rispostaBe) => {
        console.log(rispostaBe)
        this.rispostaBe = rispostaBe.response;
        this.modification.patchValue({
          name: this.rispostaBe.name,
          surname: this.rispostaBe.surname,
          dateOfBirth: this.rispostaBe.dateOfBirth,
          gender: this.rispostaBe.gender,
          nationality: this.rispostaBe.nationality,
          cf: this.rispostaBe.cf,
          address: this.rispostaBe.address,
          postalCode: this.rispostaBe.postalCode,
          phoneNumber: this.rispostaBe.phoneNumber,
          email: this.rispostaBe.email,
          password: this.rispostaBe.password,
          boatLicence: this.rispostaBe.boatLicence,
        });
      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err)
      },
    });
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

}
