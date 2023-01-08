import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { User } from 'src/app/main-content/registrazione/users/user';
/*********  Per creare un service scrivi nella console  ng g s nome-service   ************* */

@Injectable({
  providedIn: 'root'
})
export class GestisciUtenteService {

  baseUrl= "http://localhost:8081/boatManagement/user";
  

  constructor( private http: HttpClient ) { }


  registerUser(userModification: any) {
    return this.http.post<any>(this.baseUrl + '/userSave', userModification);
  }

  loginUser(userLogin: any) {
    return this.http.post<any>(this.baseUrl + "/authenticate", userLogin);
  }

  modifyUser(user: any) {
    return this.http.post<any>(this.baseUrl + '/modificaUser/'+ user.cf, user);
  }

  getUserDataService(cf: any) {
    return this.http.get<any>(this.baseUrl + "/getUserByCf?cf=" + cf)
  }

  getCfByEmailService(emailSelected: any) {
    return this.http.get<any>(this.baseUrl + "/getCfByEmail?email=" + emailSelected, emailSelected);
}


}