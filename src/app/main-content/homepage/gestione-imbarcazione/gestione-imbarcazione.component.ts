import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestione-imbarcazione',
  templateUrl: './gestione-imbarcazione.component.html',
  styleUrls: ['./gestione-imbarcazione.component.scss']
})
export class GestioneImbarcazioneComponent {

  constructor(
    private router: Router
  ) { }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

}
