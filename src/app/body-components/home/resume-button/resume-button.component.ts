import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';

@Component({
  selector: 'app-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrls: ['./resume-button.component.css']
})
export class ResumeButtonComponent implements OnInit {

  @Input() spanish:any;
  @Output() detallado: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  checked = false;
  screenWidth:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.checked = !this.checked;
    if (this.checked){
      this.detallado.emit(true);
      console.log("Checkeado!");
    }else{
      this.detallado.emit(false);
      console.log("Not checked");
    }
  }

}
