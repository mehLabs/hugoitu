import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnAuthService {
  loginToken:any = '';

  constructor() { }

  isLoggedIn(){
    if (localStorage.getItem('loginToken') !== null){
      this.loginToken = localStorage.getItem('loginToken');
      const payload = atob(this.loginToken.split('.')[1]);
      const parsedPayload = JSON.parse(payload);
      
      return parsedPayload.exp > Date.now() / 1000;
    }else{
      return false;
    }

  }
}
