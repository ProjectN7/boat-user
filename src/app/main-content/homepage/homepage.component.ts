import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  // primo metodo che viene eseguito al caricamento della pagina senza essere richiamato
  ngOnInit() {
  }

  exit() {
    this.router.navigateByUrl('login');
  }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

}
