import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService implements OnInit{

  private screenWidth:Subject<number> = new Subject<number>();
  private distancia$:Subject<number> = new Subject<number>();

  constructor() {
    window.addEventListener('scroll', () => {
      
      this.distancia$.next(window.scrollY);

    })
    window.addEventListener('resize', () => {
      this.screenWidth.next(window.innerWidth);
    })
  }

  ngOnInit(): void {
    
  }

  getPageYOfsset():Observable<number>{
    return this.distancia$.asObservable();
  }

  getScreenWidth(){
    return this.screenWidth.asObservable();
  }
}
