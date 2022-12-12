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
  err: any;
  rispostaBeLogin: any;
  email: any
  password: any;

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
      this.gestisciUtenteService.loginUser(this.login.value).subscribe({
        next: (rispostaBeLogin) => {
        this.router.navigateByUrl('home');
        this.rispostaBeLogin = rispostaBeLogin.response;
        
      },
      error: (err) => {
        this.err = err.error;
      },
    });


  }

  goToRegistrationPage() {
    this.router.navigateByUrl('registration');
  }

}
