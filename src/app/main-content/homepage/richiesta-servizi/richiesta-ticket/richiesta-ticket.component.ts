import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';

@Component({
  selector: 'app-richiesta-ticket',
  templateUrl: './richiesta-ticket.component.html',
  styleUrls: ['./richiesta-ticket.component.scss']
})


export class RichiestaTicketComponent {
  rispostaBe: any;
  rispostaBeBoat: any;
  lpSelected: any;
  TypeTicketSelected: any;
  rispostaBeRichiesta: any;
  rispostaBeTicket: any;
  err: any;
  requestTicket: FormGroup;
  localcf = sessionStorage.getItem("cf");

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {
    this.requestTicket = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      idTypeTicket: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }


  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {
    console.log(this.requestTicket.value);
    return this.gestisciImbarcazioneService.SubmitTicketRequest(this.requestTicket.value).subscribe({ 
      next: (rispostaBe) => {
        this.rispostaBeRichiesta = rispostaBe.response;
        alert(this.rispostaBeRichiesta)
        this.router.navigateByUrl('home/richiesta-servizi');
      },
      error: (err) => {
          this.err = err.error.message;
          alert(this.err)
      },
    });
  }


  getBoatList() {
    return this.gestisciImbarcazioneService.getLicencePlateByCf(this.localcf).subscribe({
      next: (rispostaBe) => {
        this.rispostaBeBoat = rispostaBe.response;
      },
      error: (err) => {
        this.err = err.error;
      }
  });

}

getTypeTicketList() {
  return this.gestisciImbarcazioneService.getAllTypeTicket().subscribe({
    next: (rispostaBeTicket) => {
      this.rispostaBeTicket = rispostaBeTicket.response;
      
    },
    error: (err) => {
      this.err = err.error
    }
});

}

}