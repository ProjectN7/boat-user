import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { Observable } from 'rxjs';
import { Boat } from 'src/app/main-content/homepage/gestione-imbarcazione/boat/boat';

/*********  Per creare un service scrivi nella console  ng g s nome-service   ************* */

@Injectable({
  providedIn: 'root'
})
export class GestioneImbarcazioneService {
  boatValue = "";
  baseUrl= "http://localhost:8090/boatManagement";
  

  constructor( private http: HttpClient ) { }


  registerBoat(boat: any) {
    return this.http.post<any>(this.baseUrl + '/boat/boatSave', boat);
    
  }

  modifyBoat(boat: any) {
    return this.http.post<any>(this.baseUrl + '/modificaBoat/' + boat.licencePlate, boat);
  }
  

  getBoatByLicencePlate(licencePlate: any) {
    return this.http.get<any>(this.baseUrl + '/boat/boatList?licencePlate=' + licencePlate);
    
  }


  getAllBoat() {
    return this.http.get<any>(this.baseUrl + '/boat/boatAllList');
  }

}