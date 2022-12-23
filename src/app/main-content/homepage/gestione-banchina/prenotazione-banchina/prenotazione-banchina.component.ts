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
  submitted = false;
  quaysideReservation: FormGroup;
  dateTimeFromSelected: any;
  dateTimeToSelected: any;

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
        alert(this.rispostaBeReservation)
        window.location.reload();
      },
      error: (err) => {
        this.err = err.error.response;
        alert(this.err)
      },
    });
  }

  getBoatList() {
    return this.gestisciImbarcazioneService.getAllBoat().subscribe({
      next: (rispostaBeLp) => {
        this.rispostaBeLp = rispostaBeLp.response;
      },
      error: (err) => {
        this.err = err.error.message;
      }
  });

}

  getPierList(quayside: any){
    return this.gestisciImbarcazioneService.getAllPier(quayside).subscribe({
      next: (rispostaBePier) => {
        this.rispostaBePier = rispostaBePier.response;
    },
      error: (err) => {
        this.err = err.error.message;
      }
    });
  }

  getQuaysideByIdPier(pier: any) {
    return this.gestisciImbarcazioneService.getQuayside(pier).subscribe({
      next: (rispostaBeQuaysideActive) => {
        this.rispostaBeQuaysideActive = rispostaBeQuaysideActive.response;
    },
      error: (err) => {
        this.err = err.error;
      }
    });
   
  }

  getAllQuaysideActive(dateTimeFrom: any, dateTimeTo: any) {
    console.log(dateTimeFrom, dateTimeTo)
    return this.gestisciImbarcazioneService.getAllQuaysideActive(dateTimeFrom, dateTimeTo).subscribe({
      next: (rispostaBeQuaysideActive) => {
        console.log(rispostaBeQuaysideActive)
        this.rispostaBeQuaysideActive = rispostaBeQuaysideActive.response;
    },
      error: (err) => {
        this.err = err.error;
      }
    });
   
  }

  dateNotSelectedYet() {
    alert("Seleziona prima le date");
  }

}
