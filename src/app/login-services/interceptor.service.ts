
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private router:Router) {}


  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string | null = localStorage.getItem('access_token');

    let request = req;

    if (token !== null) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401 || err.status === 403){
          this.router.navigate(["/login"]);
        }

        return throwError(err);
      })
    );
    
  }
  */

}