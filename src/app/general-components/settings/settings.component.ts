import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  width = window.innerWidth;
  lang = "spanish";
  @Output() detallado = new EventEmitter();
  
  constructor() {
   }

  ngOnInit(): void {

  }

  check(resumir:boolean){
    if (resumir){
      this.detallado.emit("true");
    }else{
      this.detallado.emit("false");
    }
  }

}
