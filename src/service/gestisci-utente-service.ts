import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { User } from 'src/app/main-content/registrazione/users/user';

/*********  Per creare un service scrivi nella console  ng g s nome-service   ************* */

@Injectable({
  providedIn: 'root'
})
export class GestisciUtenteService {

  baseUrl = '';

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:8080/boat_management/users';
   }


   salvaUtente(user: User) { 
    console.log(user.name);     //dentro al metodo ci devo mettere user, ma l'entità da errore
    return this.http.post<any>( 
      this.baseUrl + '/save_user', {"user": user}
    ).toPromise();
  }
  

}
