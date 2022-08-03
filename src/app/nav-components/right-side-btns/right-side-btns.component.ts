import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-side-btns',
  templateUrl: './right-side-btns.component.html',
  styleUrls: ['./right-side-btns.component.css']
})
export class RightSideBtnsComponent implements OnInit {
  @Output() detallado = new EventEmitter<any>();
  @Input() ancho:boolean = false;
  constructor() { }

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
