import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';
import { Boat } from '../boat/boat';

@Component({
  selector: 'app-inserimento-imbarcazione',
  templateUrl: './inserimento-imbarcazione.component.html',
  styleUrls: ['./inserimento-imbarcazione.component.scss']
})
export class InserimentoImbarcazioneComponent {

  //boat_registration: FormGroup;
  rispostaBeSubmit: any;
  err: any;
  boatRegistration: FormGroup;
  submitted = false;
  localcf = sessionStorage. getItem("cf");

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {    
    this.boatRegistration = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      name: new FormControl(''),
      colour: new FormControl(''),
      navigationLicence: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      declarationOfConformity: new FormControl('', Validators.required),
      rca: new FormControl('', Validators.required),
      cf: new FormControl(this.localcf, Validators.required),
    });

   }

   submit() {
    return this.gestisciImbarcazioneService.registerBoat(this.boatRegistration.value).subscribe({ 
      next: (rispostaBeSubmit) => {
        this.rispostaBeSubmit = rispostaBeSubmit.message;
        alert(this.rispostaBeSubmit);
        this.router.navigateByUrl('home/gestione-imbarcazione');

      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err);
      },
    });
 
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

}
