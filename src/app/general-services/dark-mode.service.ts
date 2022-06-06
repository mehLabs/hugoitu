import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  defaultMode = 'off';
  darkMode:any = this.defaultMode;

  constructor(private cookies:CookieService) {
    this.initService();
  }

  initService(){
    let cookie = this.cookies.checkCookie("darkmode",this.defaultMode);
     if (cookie === "on"){
       this.darkMode = "on";
     }else if (cookie === "off"){
       this.darkMode = "off";
     } 
  }

  setDarkMode(){
    if (this.darkMode === 'off'){
      this.darkMode = 'on';
      document.cookie = 'darkmode=on;';
      document.documentElement.style.setProperty('--main-blue-color', 'rgb(17, 46, 65)');
      document.documentElement.style.setProperty('--main-bg-color', 'rgb(31, 31, 31)');
      document.documentElement.style.setProperty('--main-dark-color', 'rgb(37, 34, 34)');
      document.documentElement.style.setProperty('--main-blue-shadow', 'rgba(82, 101, 163, 0.507)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(83, 83, 83)');
      document.documentElement.style.setProperty('--highlight-border', 'rgb(112, 112, 112)');

    }else if(this.darkMode === 'on'){
      this.darkMode = 'off';
      document.cookie = 'darkmode=off;';
      document.documentElement.style.setProperty('--main-blue-color', 'rgb(118, 146, 235)');
      document.documentElement.style.setProperty('--main-bg-color', 'rgb(204, 213, 243)');
      document.documentElement.style.setProperty('--main-dark-color', 'rgb(37, 34, 34)');
      document.documentElement.style.setProperty('--main-blue-shadow', 'rgba(6, 7, 12, 0.507)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--highlight-border', 'rgb(255, 255, 255)');
    }
  }
}
