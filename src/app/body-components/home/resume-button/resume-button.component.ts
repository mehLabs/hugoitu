import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';

@Component({
  selector: 'app-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrls: ['./resume-button.component.css']
})
export class ResumeButtonComponent implements OnInit {

  @Input() spanish:any;
  @Output() resumir: EventEmitter<boolean> = new EventEmitter();
  
  checked = false;
  screenWidth:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.checked = !this.checked;
    if (this.checked){
      this.resumir.emit(true);
      console.log("Checkeado!");
    }else{
      this.resumir.emit(false);
      console.log("Not checked");
    }
  }

}
