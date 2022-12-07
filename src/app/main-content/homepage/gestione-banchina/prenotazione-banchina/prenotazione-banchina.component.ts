import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';


@Component({
  selector: 'app-prenotazione-banchina',
  templateUrl: './prenotazione-banchina.component.html',
  styleUrls: ['./prenotazione-banchina.component.scss']
})
export class PrenotazioneBanchinaComponent {
  rispostaBeLp: any;
  rispostaBeReservation: any;
  rispostaBePier: any;
  rispostaBeQuaysideActive: any;
  lpSelected: any;
  pierSelected: any;
  quaysideSelected: any;
  err: any;
  quaysideReservation: FormGroup;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) {
    this.quaysideReservation = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      pier: new FormControl('', Validators.required),
      quayside: new FormControl('', Validators.required),
      dateTimeFrom: new FormControl('', Validators.required),
      dateTimeTo: new FormControl('', Validators.required),

    })
   }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {
    return this.gestisciImbarcazioneService.CreateReservation(this.quaysideReservation.value).subscribe({ 
      next: (rispostaBeReservation) => {
        this.rispostaBeReservation = rispostaBeReservation.response;
      },
      error: (err) => {
        this.err = err.error;
      },
    });
  }

  getBoatList() {
    return this.gestisciImbarcazioneService.getAllBoat().subscribe({
      next: (rispostaBeLp) => {
        this.rispostaBeLp = rispostaBeLp;
      },
      error: (err) => {
        this.err = err.error;
      }
  });

}

  getPierList(){
    return this.gestisciImbarcazioneService.getAllPier().subscribe({
      next: (rispostaBePier) => {
        this.rispostaBePier = rispostaBePier;
    },
      error: (err) => {
        this.err = err.error;
      }
    });
  }

  getQuaysideByIdPier(pier: any) {
    return this.gestisciImbarcazioneService.getQuayside(pier).subscribe({
      next: (rispostaBeQuaysideActive) => {
        this.rispostaBeQuaysideActive = rispostaBeQuaysideActive;
    },
      error: (err) => {
        this.err = err.error;
      }
    });
   
  }

}
