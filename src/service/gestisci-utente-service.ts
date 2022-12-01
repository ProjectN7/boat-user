import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/main-content/registrazione/users/user';
/*********  Per creare un service scrivi nella console  ng g s nome-service   ************* */

@Injectable({
  providedIn: 'root'
})
export class GestisciUtenteService {

  baseUrl= "http://localhost:8080/boatManagement/user";
  

  constructor( private http: HttpClient ) { }


  registerUser(user: any) {
    console.log(user);
    return this.http.post<any>(this.baseUrl + '/userSave', user).subscribe((res: any) => {
      alert ("Success");
    });
    
  }
  

  user_list(newUser: User) {
    return this.baseUrl + '/userList', {"user": newUser}
  }

}