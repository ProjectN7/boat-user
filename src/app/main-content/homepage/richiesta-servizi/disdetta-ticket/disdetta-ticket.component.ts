import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';
import { Ticket } from '../Ticket';


@Component({
  selector: 'app-disdetta-ticket',
  templateUrl: './disdetta-ticket.component.html',
  styleUrls: ['./disdetta-ticket.component.scss']
})
export class DisdettaTicketComponent {
  rispostaBeReservation: any;
  rispostaBeReservationQuayside: any;
  rispostaBeLp: any;
  reservationSelected: any;
  lpSelected: any;
  err: any;
  rispostaBeSubmit: any;
  rispostaBeTicket: Ticket;
  idTypeTicket: any;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) { 
    this.rispostaBeTicket = new Ticket();
  }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit(Ticket: any) {
    return this.gestisciImbarcazioneService.deleteTicketReservation(Ticket).subscribe({ 
      next: (rispostaBeSubmit) => {
        console.log(rispostaBeSubmit);
        this.rispostaBeSubmit = rispostaBeSubmit.response;
        alert(this.rispostaBeSubmit);
        window.location.reload();
        
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
      console.log(this.rispostaBeTicket)
      if (this.rispostaBeTicket.idTypeTicket = "1") {
        this.rispostaBeTicket.idTypeTicket = "RIFORNIMENTO";
      } else if (this.rispostaBeTicket.idTypeTicket = "2") {
        this.rispostaBeTicket.idTypeTicket = "PULIZIA"
      } else {
        this.rispostaBeTicket.idTypeTicket = "MANUTENZIONE";
      }
    },
    error: (err) => {
      this.err = err.error;
    }
});
}


}
