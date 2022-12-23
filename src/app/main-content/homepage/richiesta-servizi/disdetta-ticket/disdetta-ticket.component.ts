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
  rispostaBeDate: any;
  rispostaBeTicket1: any;

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


  getAllLicencePlateActive() {
    return this.gestisciImbarcazioneService.getLicencePlateActiveTicketService().subscribe({
      next: (rispostaBeBoat) => {
        this.rispostaBeLp = rispostaBeBoat.response;
      },
      error: (err) => {
        this.err = err.error.response;
        alert(this.err)
      }
  });
  
  }

getReservationByLp(licencePlate: any) {
  return this.gestisciImbarcazioneService.getTicketReservationByLp(licencePlate).subscribe({
    next: (rispostaBe) => {
      this.rispostaBeTicket = rispostaBe;
      this.rispostaBeDate = rispostaBe.response.date;
      this.rispostaBeTicket1 = rispostaBe.response.idTicket;
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
