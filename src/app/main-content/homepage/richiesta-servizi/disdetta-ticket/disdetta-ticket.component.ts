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
  rispostaBeTicket: any;
  rispostaBeDate: any;
  rispostaBeNomeTicket: any;
  idTicket: any;

  localCf = sessionStorage.getItem("cf");
  deleteTicket: FormGroup;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) { 
    this.deleteTicket = new FormGroup({
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      idTicket: new FormControl('', Validators.required),
      idTypeTicket: new FormControl('', Validators.required),
      isActive: new FormControl('', Validators.required),
      licencePlate: new FormControl('',Validators.required)

    })
  }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {
    return this.gestisciImbarcazioneService.deleteTicketReservation(this.rispostaBeTicket.idTicket).subscribe({ 
      next: (rispostaBe) => {
        console.log(rispostaBe);
        rispostaBe = rispostaBe.response;
        alert(rispostaBe);
        this.router.navigateByUrl('home/richiesta-servizi');
        
      },
      error: (err) => {
        this.err = err.resposne;
      },
    });
  }


  getAllLicencePlateActive() {
    return this.gestisciImbarcazioneService.getLicencePlateByCf(this.localCf).subscribe({
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
      this.rispostaBeTicket = rispostaBe.response[0];
      this.rispostaBeDate = this.rispostaBeTicket.date;
      this.getTypeTicketName(this.rispostaBeTicket.idTypeTicket);
     
    },
    error: (err) => {
      this.err = err.error.response;
      alert(this.err)
      window.location.reload();
    }
});
}


getTypeTicketName(typeticket: any) {
  return this.gestisciImbarcazioneService.getTypeTicketNameService(typeticket).subscribe({
    next: (rispostaBe) => {
      this.rispostaBeNomeTicket = rispostaBe.response;
      console.log(rispostaBe)
    },
    error: (err) => {
      this.err = err.error.response;
      alert(this.err)
    
    }
});
}

}
