import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment'; 
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected jwt:Object | undefined;
  protected tokenSubject:BehaviorSubject<any> = new BehaviorSubject<any>("null");
  protected auth:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected firebaseToken:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  

  constructor(private http:HttpClient) { 
    let credentials = window.localStorage.getItem("access_token");
    if (credentials != null){

      this.storeCredentials(credentials);
    }

    this.isAuth();

  }

  storeCredentials(credentials:Object){
    this.tokenSubject.next(credentials);
    this.jwt = credentials;
    window.localStorage.setItem("access_token",credentials.toString());
    this.isAuth();

  }

  sendCredentials(credentials:Object):Observable<any>{
      return this.http.post<any>(`${env.dev.serverUrl}`+"/api/public/auth",credentials,{ observe: 'response', responseType: 'json' })

  }

  protected isAuth(){
    if (this.jwt && this.jwt.toString().length > 0){
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.jwt}`
      })

      this.http.get<boolean>(`${env.dev.serverUrl}`+"/api/private/isAuth",{headers:header}).subscribe( (auth) => {
        this.auth.next(auth);
        this.makeFirebaseToken(header).subscribe( (token:any) => {
          this.firebaseToken.next(token);
          firebase.auth().signInWithCustomToken(token.token);
        });
      });
    }else{
      this.auth.next(false);
    }
  }

  isAuthenticated():Observable<boolean>{
    return this.auth.asObservable();
  }

  makeFirebaseToken(header:any){
    return this.http.get<any>(`${env.dev.serverUrl}`+"/api/protected/firebaseToken",{headers:header});
  }

  getFirebaseHeader(){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.firebaseToken.value}`
    });
    return header;
  }

  getFirebaseToken(){
    console.log(this.firebaseToken.value);
    return this.firebaseToken.value;
  }

  logout(){
    window.localStorage.removeItem("access_token");
  }

  getJTW(){
    return this.jwt;
  }

  test():Observable<string>{
    let token;
    this.tokenSubject.subscribe(((clave:any) => token = clave));
    console.log(token);
    if (this.jwt !== undefined && this.jwt !== null){


      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.jwt}`
      })
      return this.http.get(`${env.dev.serverUrl}`+"/api/protected/test",{headers:header,responseType:"text"});
    }
    
    return this.http.get(`${env.dev.serverUrl}`+"/api/public/test",{responseType:"text"})
  }

  catchAuthError(error:any):Observable<Response>{
    console.log(JSON.stringify(error));
    return throwError(error);
  }
}
