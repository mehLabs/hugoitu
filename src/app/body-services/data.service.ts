import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from '../general-services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  spanish:boolean = true;
  loaded:boolean = false;
  lang:any;
  defaultLang="spanish";

  data$ = new Subject<any>();



  constructor(private http:HttpClient, private cookies:CookieService) {
    
    console.log(document.cookie);
    let localLang = this.cookies.checkCookie("lang",this.defaultLang);

    this.dlData(localLang).subscribe( data => {
      this.data$.next(data);
      this.data$.unsubscribe();
    });
  }


   ngOnInit(): void{
  }

  dlData(lang:string):Observable<any>{
    return this.http.get('/assets/'+lang+'.json');
  }

  dlPortfolioText():Observable<any>{
    return this.data$.asObservable();
  }
  dlLoginText():Observable<any>{
    if (this.lang === "spanish"){
      return this.http.get('/assets/login-es.json');
    }else if (this.lang === "english"){
      return this.http.get('/assets/login-en.json');
    }else{
      return this.http.get('/assets/login-any.json');
    }
  }

  changeLanguage(){
    this.spanish = !this.spanish;
  }

  toSpanish(){
    document.cookie = "lang=spanish;"
    this.spanish = true;
    location.reload();

  }

  toEnglish(){
    document.cookie = "lang=english;"
    this.spanish = false;
    location.reload();
  }

  checkLoaded(){
    this.loaded = true;
  }

  isSpanish(){
    return this.spanish;
  }

  isLoaded():boolean{
    return this.loaded;
  }
}
