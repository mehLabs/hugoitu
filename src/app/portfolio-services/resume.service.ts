import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  resumir:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getResumir(){
    return this.resumir.asObservable()
  }

  toggleResumir(){
    this.resumir.next(!this.resumir.value)
  }
}
