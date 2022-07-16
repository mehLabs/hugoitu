import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  defaultMode = 'off';
  darkMode:BehaviorSubject<any> = new BehaviorSubject<any>("false");

  constructor(private cookies:CookieService) {
    this.darkMode.next(this.defaultMode);
    this.initService();
  }

  getDarkMode():boolean{
    let darkMode;
    this.darkMode.subscribe(mode => darkMode = mode);
    if (darkMode === "on"){
      return true;
    }else{
      return false;
    }
  }

  initService(){
    let darkMode = this.cookies.checkCookie("darkmode",this.defaultMode);
    if (darkMode === "on"){
      this.setDarkMode();
    }else if (darkMode === "off"){
       this.darkMode.next("off");
       
    }
  }

  setDarkMode(){
    let darkMode;
    this.darkMode.subscribe(mode => darkMode = mode);
    if (darkMode === 'off'){
      this.darkMode.next("on");
      document.cookie = 'darkmode=on;';
      document.documentElement.style.setProperty('--main-blue-color', 'rgb(17, 46, 65)');
      document.documentElement.style.setProperty('--main-bg-color', 'rgb(31, 31, 31)');
      document.documentElement.style.setProperty('--main-dark-color', 'rgb(37, 34, 34)');
      document.documentElement.style.setProperty('--main-blue-shadow', 'rgba(82, 101, 163, 0.507)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(83, 83, 83)');
      document.documentElement.style.setProperty('--highlight-border', 'rgb(112, 112, 112)');
      document.documentElement.style.setProperty('--font-color', 'rgb(255,255,255)');
      document.documentElement.style.setProperty('--card-bg', '#060612');
      document.documentElement.style.setProperty('--main-white-rgb', 'rgb(37, 34, 34)');

    }else if(darkMode === 'on'){
      this.darkMode.next("off");
      document.cookie = 'darkmode=off;';
      document.documentElement.style.setProperty('--main-blue-color', 'rgb(118, 146, 235)');
      document.documentElement.style.setProperty('--main-bg-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--main-dark-color', 'rgb(37, 34, 34)');
      document.documentElement.style.setProperty('--main-blue-shadow', 'rgba(6, 7, 12, 0.507)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--highlight-border', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--font-color', 'rgb(37,34,34)');
      document.documentElement.style.setProperty('--card-bg', '#fff');
      document.documentElement.style.setProperty('--main-white-rgb', 'rgb(255,255,255)');
    }
  }
}
