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
    console.log(this.baseUrl + '/modificaBoat/' + boat.licencePlate)
    return this.http.post<any>(this.baseUrl + '/modificaBoat/' + boat.licencePlate, boat);
  }
  

  getBoatByLicencePlate(licencePlate: any) {
    return this.http.get<any>(this.baseUrl + '/boat/boatList?licencePlate=' + licencePlate);
    
  }

  getAllBoat() {
    return this.http.get<any>(this.baseUrl + '/boat/boatAllList');
  }

  getAllPier() {
    return this.http.get<any>(this.baseUrl + '/pier/pierAllList');
  }

  getQuayside(pier: any) {
    return this.http.get<any>(this.baseUrl + '/quayside/quaysideAllList?pier=' + pier);
  }

  CreateReservation(reservation: any) {
    return this.http.post<any>(this.baseUrl + '/reservation/reservationSave', reservation);
  }

  getReservationsbyLpService(licencePlate: any) {
    return this.http.get<any>(this.baseUrl + '/reservation/reservationListLicencePlate?licencePlate=' + licencePlate);
  }

  deleteReservation(licencePlate: any) {
    return this.http.delete<any>(this.baseUrl + '/reservation/reservationDelete/' + licencePlate);
  }

  getAllTypeTicket() {
    return this.http.get<any>(this.baseUrl + '/ticket/getAllTypeTicket');
    
  }

  SubmitTicketRequest(licencePlate: any) {
    return this.http.post<any>(this.baseUrl + '/ticket/reservationTicket', licencePlate);
  }
  getTicketReservationByLp(licencePlate: any) {
    return this.http.get<any>(this.baseUrl + '/ticket/reservationListLicencePlate?licencePlate=' + licencePlate);
  }
  
}