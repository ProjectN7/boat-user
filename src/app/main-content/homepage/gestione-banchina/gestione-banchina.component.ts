import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestione-banchina',
  templateUrl: './gestione-banchina.component.html',
  styleUrls: ['./gestione-banchina.component.scss']
})
export class GestioneBanchinaComponent {

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
