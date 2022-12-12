import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';

@Component({
  selector: 'app-disdetta-ticket',
  templateUrl: './disdetta-ticket.component.html',
  styleUrls: ['./disdetta-ticket.component.scss']
})
export class DisdettaTicketComponent {

  UpdateTicketForm: FormGroup;
  rispostaBeReservation: any;
  rispostaBeReservationQuayside: any;
  rispostaBeLp: any;
  reservationSelected: any;
  lpSelected: any;
  err: any;
  rispostaBeSubmit: any;
  rispostaBeTicket: any;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) {
    this.UpdateTicketForm = new FormGroup({
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

  submit(licencePlate: any) {
    return this.gestisciImbarcazioneService.deleteReservation(licencePlate).subscribe({ 
      next: (rispostaBeSubmit) => {
        console.log(rispostaBeSubmit);
        this.rispostaBeSubmit = rispostaBeSubmit.response;
        
      },
      error: (err) => {
        this.err = err.resposne;
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

getReservationByLp(licencePlate: any) {
  return this.gestisciImbarcazioneService.getTicketReservationByLp(licencePlate).subscribe({
    next: (rispostaBe) => {
      this.rispostaBeTicket = rispostaBe;
    },
    error: (err) => {
      this.err = err.error;
    }
});
}

}
