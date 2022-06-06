import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  
  checkCookie(cookie:any,defaultC:any):any {
    var lang = this.getCookie(cookie);
    if (lang !== "" && lang !== null) {
      return lang;
    }else {
      this.setCookie("lang",defaultC,(60*60*24*30));
      return defaultC;
    }
  }

  setCookie(name:any,value:any,timeOut:any){
    let globalCookies = document.cookie;
    document.cookie = globalCookies + ";"+name+"="+value+"; max-age="+timeOut;
  }


  getCookie(cookie:any) {
    var cookieArr = document.cookie.split(";"); //Separamos en cookies y llo hacemos un array
    for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("="); //Separamos cada cookie en su nombre y su valor
      if(cookie == cookiePair[0].trim()) { /* Si el valor de entrada coincide con el nombre (sin espacios) vvv */
        return decodeURIComponent(cookiePair[1]); /* devolvemos el valor de la cookie específica */
      }
    }
    return null;
  }
}
