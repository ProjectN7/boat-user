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

  boatModification: FormGroup;

  constructor(
    private router: Router,
    private gestisciImbarcazioneService: GestioneImbarcazioneService
  ) {
    this.boatModification = new FormGroup({
      licencePlate: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      colour: new FormControl('', Validators.required),
      navigationLicence: new FormControl('', Validators.required),
      power: new FormControl('', Validators.required),
      declarationOfConformity: new FormControl('', Validators.required),
      rca: new FormControl('', Validators.required),
      cf: new FormControl('', Validators.required),
    });

   }


   submit() {
    return this.gestisciImbarcazioneService.modifyBoat(this.boatModification.value).subscribe({ 
      next: (rispostaBe) => {
        this.boatModification = rispostaBe.response;
        window.location.reload();
      },
      error: (err) => {
        this.err = this.err;
        alert(this.err);
      },
    });
  }

  
  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  getBoatList() {
    return this.gestisciImbarcazioneService.getAllBoat().subscribe({
      next: (rispostaBe) => {
        this.rispostaBe = rispostaBe;
      },
      error: (err) => {
        console.log(err);
      }
  });

}

getSingleBoat(valueSelected: any) {
  return this.gestisciImbarcazioneService.getBoatByLicencePlate(valueSelected).subscribe({
    next: (rispostaBe) => {
      this.boatModification.patchValue({
        licencePlate: rispostaBe.licencePlate,
        cf: rispostaBe.cf,
        name: rispostaBe.name,
        colour: rispostaBe.colour,
        navigationLicence: rispostaBe.navigationLicence,
        power: rispostaBe.power,
        declarationOfConformity: rispostaBe.declarationOfConformity,
        rca: rispostaBe.rca,
      });
    },
    error: (err) => {
      console.log(err);
    }
});


}
}
