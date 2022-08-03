import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  protected editMode:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleEdit(){
    this.editMode.next(!this.editMode.getValue());
  }
  
  getEditMode(){
    return this.editMode.asObservable();
  }
}
