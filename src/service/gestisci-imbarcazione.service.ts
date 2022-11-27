import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { Observable } from 'rxjs';
import { Boat } from 'src/app/main-content/homepage/gestione-imbarcazione/boat/boat';
import { User } from 'src/app/main-content/registrazione/users/user';
/*********  Per creare un service scrivi nella console  ng g s nome-service   ************* */

@Injectable({
  providedIn: 'root'
})
export class GestioneImbarcazioneService {

  baseUrl= "http://localhost:8080/boatManagement/boat";
  

  constructor( private http: HttpClient ) { }


  registerBoat(boat: any) {
    console.log(boat);
    return this.http.post<any>(this.baseUrl + '/boatSave', boat).subscribe((resultData: any) => {
      alert ("Success");
    });
    
  }
  

  user_list(boat: Boat) {
    return this.baseUrl + '/boatList', {"boat": boat}
  }

}