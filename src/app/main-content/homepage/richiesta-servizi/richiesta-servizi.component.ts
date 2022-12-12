import { Component } from '@angular/core';
import { Router } from '@angular/router';
  
  
  @Component({
    selector: 'app-richiesta-servizi',
    templateUrl: './richiesta-servizi.component.html',
    styleUrls: ['./richiesta-servizi.component.scss']
  })
  
  
  export class RichiestaServiziComponent {

    constructor(
      private router: Router
    ) {}
    
    goToPage(urlpagina: any) {
      return this.router.navigateByUrl(urlpagina);
    }

    goBack() {
      this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
    }
  
  }
  
