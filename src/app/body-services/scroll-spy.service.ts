import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService implements OnInit{

  private screenWidth:number;
  private distancia$:Subject<number> = new Subject<number>();

  constructor() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('scroll', () => {
      
      this.distancia$.next(window.scrollY);
      console.log(window.scrollY);

    })
  }

  ngOnInit(): void {
    
  }

  getPageYOfsset():Observable<number>{
    return this.distancia$.asObservable();
  }

  getScreenWidth(){
    return this.screenWidth;
  }
}
