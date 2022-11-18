import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CookieService } from '../general-services/cookie.service';
import { environment as env } from 'src/environments/environment';
import { LoginService } from '../login-services/login.service';
import { EditService } from '../portfolio-services/edit.service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  spanish:boolean = true;
  loaded:boolean = false;
  loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  lang:any;
  defaultLang="spanish";
  jwt:Object|undefined;
  modified:boolean = false;
  saved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  portfolio$:BehaviorSubject<any> = new BehaviorSubject<any>([]);

  originalPortfolio:any;

  data$:BehaviorSubject<any> = new BehaviorSubject<any>("null");

  savedData:any[] = [];



  constructor(private http:HttpClient, private cookies:CookieService, private login:LoginService, private editService:EditService) {
    
    let localLang = this.cookies.checkCookie("lang",this.defaultLang);
    this.lang = localLang;

    this.dlData(localLang).subscribe( data => {
      this.data$.next(data);
    });

    this.getPortfolio().subscribe( (data:any) => {
      this.savedData = structuredClone(data);
      this.originalPortfolio = structuredClone(data);
      this.portfolio$.next(structuredClone(data));
    })
  }


   ngOnInit(): void{
  }

  dlData(lang:string):Observable<any>{
    return this.http.get('/assets/'+lang+'.json');
  }

  getPortfolio(){
    return this.http.get(`${env.dev.serverUrl}`+'/api/public/info');
  }

  dlPortfolio():Observable<any>{
    return this.portfolio$.asObservable();
  }

  dlPortfolioText():Observable<any>{
    return this.data$.asObservable();
  }

  checkPortfolio(){
    this.dlData(this.lang).subscribe( data => {
      this.data$.next(data);
    });
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

  update(data:any,key:string){
    console.log(this.savedData)
    this.savedData = {
      ...this.savedData,
      [key]:data
    }
    this.modified = true;
  }

  isModified(){
    return this.modified;
  }

  cancel(){
    console.log(this.originalPortfolio);
    this.portfolio$.next(this.originalPortfolio);
    this.savedData = this.originalPortfolio;

    this.modified = false;
      
  }

  getLoading(){
    return this.loading.asObservable();
  }

  saveAll(){
    this.jwt = this.login.getJTW();
    this.loading.next(true);

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwt}`
    })
    this.http.post<boolean>(`${env.dev.serverUrl}`+"/api/private/updateProfile",this.savedData,{headers:header}).subscribe( (isGuardado:boolean) => {
      console.log(this.savedData);
      this.portfolio$.next(structuredClone(this.savedData));
      this.saved.next(isGuardado);
      this.saved.next(false);
      this.modified = false;
      this.editService.toggleEdit();
      this.originalPortfolio = structuredClone(this.savedData);
      this.loading.next(false);

    });
  }

  isSaved():Observable<boolean>{
    return this.saved.asObservable();
  }

}
