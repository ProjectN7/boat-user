import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneImbarcazioneService } from 'src/service/gestisci-imbarcazione.service';
import { Boat } from '../boat/boat';



@Component({
  selector: 'app-modifica-imbarcazione',
  templateUrl: './modifica-imbarcazione.component.html',
  styleUrls: ['./modifica-imbarcazione.component.scss']
})
export class ModificaImbarcazioneComponent {
  valueSelected: any;
  err: any;
  rispostaBe: any;
  rispostaBeBoat: any;
  submitted = false;
  boatModification: FormGroup;
  localcf = sessionStorage.getItem("cf");

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {
    this.boatModification = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      name: new FormControl(''),
      colour: new FormControl(''),
      navigationLicence: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      declarationOfConformity: new FormControl('', Validators.required),
      rca: new FormControl('', Validators.required),
      cf: new FormControl(this.localcf, Validators.required),
    });

   }

   submit() {
    return this.gestisciImbarcazioneService.modifyBoat(this.boatModification.value).subscribe({ 
      next: (rispostaBe) => {
        this.rispostaBe = rispostaBe.response;
        alert(this.rispostaBe);
        this.router.navigateByUrl('home/gestione-imbarcazione');

      },
      error: (err) => {
        this.err = err.error.message;
        alert(this.err)
      },
    });
  }

  
  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  getBoatList() {
    this.localcf = sessionStorage.getItem("cf")
    return this.gestisciImbarcazioneService.getLicencePlateByCf(this.localcf).subscribe({
      next: (rispostaBe) => {
        this.rispostaBeBoat = rispostaBe.response;
      },
      error: (err) => {
        this.err = err.error;
        alert(this.err.response);
      }
  });

}

getSingleBoat(valueSelected: any) {
  return this.gestisciImbarcazioneService.getBoatByLicencePlate(valueSelected).subscribe({
    next: (rispostaBe) => {
      this.rispostaBe = rispostaBe.response;
      this.boatModification.patchValue({
        licencePlate: this.rispostaBe.licencePlate,
        cf: this.rispostaBe.cf,
        name: this.rispostaBe.name,
        colour: this.rispostaBe.colour,
        navigationLicence: this.rispostaBe.navigationLicence,
        power: this.rispostaBe.power,
        declarationOfConformity: this.rispostaBe.declarationOfConformity,
        rca: this.rispostaBe.rca,
      });
    },
    error: (err) => {
      console.log(err);
    }
});

}
}
