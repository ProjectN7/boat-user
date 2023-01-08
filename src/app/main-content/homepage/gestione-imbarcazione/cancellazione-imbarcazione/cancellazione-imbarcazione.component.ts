import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';


@Component({
  selector: 'app-cancellazione-imbarcazione',
  templateUrl: './cancellazione-imbarcazione.component.html',
  styleUrls: ['./cancellazione-imbarcazione.component.scss']
})
export class CancellazioneImbarcazioneComponent {
  deleteBoat: FormGroup;
  rispostaBeReservation: any;
  rispostaBeReservationQuayside: any;
  rispostaBeLp: any;
  rispostaBe: any;
  reservationSelected: any;
  lpSelected: any;
  err: any;
  rispostaBeSubmit: any;
  idReservation: any;
  localCf = sessionStorage.getItem("cf");

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService

  ) {
    this.deleteBoat = new FormGroup({
      licencePlate: new FormControl('', Validators.required),

    })
   }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {
    return this.gestisciImbarcazioneService.deleteBoatService(this.lpSelected).subscribe({ 
      next: (rispostaBeSubmit) => {
        this.rispostaBeSubmit = rispostaBeSubmit.response;
        console.log(this.rispostaBeSubmit)
        alert(this.rispostaBeSubmit)
        this.router.navigateByUrl('home/gestione-imbarcazione');
        
      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err);
      },
    });
  }

  getBoatList() {
    return this.gestisciImbarcazioneService.getLicencePlateByCf(this.localCf).subscribe({
      next: (rispostaBeLp) => {
        this.rispostaBeLp = rispostaBeLp.response;
      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err);
      }
  });
}

}
