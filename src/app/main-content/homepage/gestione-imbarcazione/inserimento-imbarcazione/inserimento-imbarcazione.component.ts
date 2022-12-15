import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';

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
  response: any;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {    
    this.boatRegistration = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      colour: new FormControl('', Validators.required),
      navigationLicence: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      declarationOfConformity: new FormControl('', Validators.required),
      rca: new FormControl('', Validators.required),
      cf: new FormControl('', Validators.required),
    });

   }

   submit() {
    return this.gestisciImbarcazioneService.registerBoat(this.boatRegistration.value).subscribe({ 
      next: (rispostaBeSubmit) => {
        this.rispostaBeSubmit = rispostaBeSubmit.response;
        alert(this.rispostaBeSubmit);
      },
      error: (err) => {
        this.err = err.error;
        alert(this.err);
      },
    });
 
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

}
