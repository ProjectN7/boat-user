import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prenotazione-banchina',
  templateUrl: './prenotazione-banchina.component.html',
  styleUrls: ['./prenotazione-banchina.component.scss']
})
export class PrenotazioneBanchinaComponent {
  rispostaBe: any;
  valueSelected: any;

  constructor(
    private router: Router
  ) { }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

  goBack() {
    this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
  }

  submit() {

  }
}
