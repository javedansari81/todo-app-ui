import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticateService {
  
  constructor(private http : HttpClient) { }

  Authenticate(username:string,password:string){
    console.log('before ' + this.isUserLoggedIn());
    if(username.toLocaleUpperCase() ==='JAVED' && password.toLocaleLowerCase()==='ansari'){
        sessionStorage.setItem('authenticateUser',username);
        console.log('after ' + this.isUserLoggedIn());
        return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let name = sessionStorage.getItem('authenticateUser');
    if(name === null){
      return false;
    }
    return true;
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }

  
}
