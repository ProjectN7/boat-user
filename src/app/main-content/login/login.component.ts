import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ContentChild  } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestisciUtenteService } from 'src/service/gestisci-utente-service';
import { UserLogin } from './UserLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
 // creazione del form da utilizzare per i campi di input
  login: FormGroup;
  err: any;
  rispostaBeLogin: any;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  model = new UserLogin("","");
  submitted = false;
  emailPattern = "[a-zA-Z]*"; 
  showPassword = false;
  fieldTextType: any;
  repeatFieldTextType: any;
  visible:boolean = true;
  changetype:boolean =true;

  constructor(
    private router: Router,
    private gestisciUtenteService: GestisciUtenteService,
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required,)
    });
    
   }
 
   viewpass(){
     this.visible = !this.visible;
     this.changetype = !this.changetype;
   }

  submit() {
    console.log(this.login.value)
    if(this.login.invalid) {
      return;
    }
    this.router.navigate(['home']);

  }

  goToRegistrationPage() {
    this.router.navigateByUrl('registration');
  }

  onSubmit() { this.submitted = true; }

 /* userLogin(data: any) {
    this.gestisciUtenteService.loginUser(data).subscribe((result:  any)=> {
      console.warn(result)
      sessionStorage.setItem("token",result.token)
      this.router.navigateByUrl('/home')
    })
  }
  */

  userLogin(data: any) {
    return this.gestisciUtenteService.loginUser(data).subscribe({ 
      next: (result) => {
        console.warn(result)
        sessionStorage.setItem("token",result.token)
        this.router.navigateByUrl('/home')
      },
      error: (err) => {
          alert("Dati immessi non validi, riprova")
      },
    });
  }


  userProfile() {
    let headers = new HttpHeaders()
    .set("Autorization",`Bearer ${sessionStorage.getItem('token')}`)
  }


  getCfByEmail(emailSelected: any) {
    console.log(emailSelected)
    this.gestisciUtenteService.getCfByEmailService(emailSelected).subscribe((result:  any)=> {
      console.warn(result.response)
      sessionStorage.setItem("cf",result.response)
    })
  }


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

}