import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';

@Component({
  selector: 'app-inserimento-imbarcazione',
  templateUrl: './inserimento-imbarcazione.component.html',
  styleUrls: ['./inserimento-imbarcazione.component.scss']
})
export class InserimentoImbarcazioneComponent {

  //boat_registration: FormGroup;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {
    // assegnazione dei campi al form, che verranno poi richiamati nell'input con l'attributo formControlName
    
    /*this.boat_registration = new FormGroup({
      licence_plate: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      colour: new FormControl('', Validators.required),
      navigation_licence: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      declaration_of_conformity: new FormControl('', Validators.required),
      rca: new FormControl('', Validators.required),
    });
*/
   }


    submit() {
    //this.gestisciImbarcazioneService.registerBoat(this.boat_registration.value);
  }


  /* Al momento disabled
  isInvalidSelection() {
    return this.registration.value.sesso !== 'O' && this.registration.value.sesso !== 'F' && this.registration.value.sesso !== 'M'
  }
  */

}
