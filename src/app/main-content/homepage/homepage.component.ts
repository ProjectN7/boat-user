import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {

  constructor(
    private router: Router
  ) { }



  LogoutUser() {
    window.sessionStorage.removeItem("token")
    console.warn(sessionStorage.getItem("token")) //Controllo se effettivamente ci sia qualcosa nella cache
    alert("Logout Effettuato con Successo")
      this.router.navigateByUrl('login');
  }

  goToPage(urlpagina: any) {
    return this.router.navigateByUrl(urlpagina);
  }

}
