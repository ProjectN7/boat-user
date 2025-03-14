import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestione-profilo',
  templateUrl: './gestione-profilo.component.html',
  styleUrls: ['./gestione-profilo.component.scss']
})
export class GestioneProfiloComponent { 

  constructor(
    private router: Router
  ) { }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }


}

