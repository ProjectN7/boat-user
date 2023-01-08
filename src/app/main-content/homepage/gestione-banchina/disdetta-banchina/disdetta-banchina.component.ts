import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';


@Component({
  selector: 'app-prenotazione-banchina',
  templateUrl: './disdetta-banchina.component.html',
  styleUrls: ['./disdetta-banchina.component.scss']
})
export class DisdettaBanchinaComponent {
  quaysideDeleteReservation: FormGroup;
  rispostaBeReservation: any;
  rispostaBeReservationQuayside: any;
  rispostaBeLp: any;
  rispostaBe: any;
  reservationSelected: any;
  lpSelected: any;
  err: any;
  rispostaBeSubmit: any;
  idReservation: any;
  localcf = sessionStorage.getItem("cf");

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) {
    this.quaysideDeleteReservation = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      pier: new FormControl('', Validators.required),
      quayside: new FormControl('', Validators.required),
      dateTimeFrom: new FormControl('', Validators.required),
      dateTimeTo: new FormControl('', Validators.required),
      idReservation: new FormControl(Validators.required)

    })
   }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {
    return this.gestisciImbarcazioneService.deleteReservation(this.idReservation).subscribe({ 
      next: (rispostaBeSubmit) => {
        this.rispostaBeSubmit = rispostaBeSubmit.response;
        alert(this.rispostaBeSubmit)
        this.router.navigateByUrl('home/gestione-banchina');
        
      },
      error: (err) => {
        this.err = err.message;
        alert(this.err)
      },
    });
  }

  getBoatList() {
    return this.gestisciImbarcazioneService.getAllBoat().subscribe({
      next: (rispostaBeLp) => {
        this.rispostaBeLp = rispostaBeLp;
      },
      error: (err) => {
        console.log(err);
      }
  });

}


getALlLicencePlateActive() {
  return this.gestisciImbarcazioneService.getLicencePlateByCf(this.localcf).subscribe({
    next: (rispostaBe) => {
      this.rispostaBe = rispostaBe.response;
    },
    error: (err) => {
      this.err = err.error.response;
      alert(this.err)
    }
});

}

getReservationByLp(licencePlate: any) {
  return this.gestisciImbarcazioneService.getReservationsbyLpService(licencePlate).subscribe({
    next: (rispostaBeReservation) => {
      this.rispostaBeReservationQuayside = rispostaBeReservation.response.quayside;
      this.idReservation = rispostaBeReservation.response.idReservation;
    },
    error: (err) => {
      this.err = err.error.message;
      alert(this.err);
      window.location.reload();
    }
});
}

}
