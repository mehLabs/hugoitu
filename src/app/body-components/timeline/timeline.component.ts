import { Component, HostListener, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Output() collapseButton = new EventEmitter();

  public size992 = true;
  toggleTl = true;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 992){
      this.size992=false
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

    if(window.innerWidth >= 992) {
      this.size992=true;
    }else{
      this.size992=false;
    }
  }

  onClick(){
    this.toggleTl = !this.toggleTl;
    let toggleIcon = document.getElementById("toggle");
    let timeline = document.getElementById("collapseTimeline");
    let listaFechas = document.getElementById("listaFechas");

    if (this.toggleTl){
      timeline?.classList.add("collapsed");
      toggleIcon?.classList.add("left");
      listaFechas?.classList.add("collapsed");
      this.collapseButton.emit("true");
    }
    else{
      timeline?.classList.remove("collapsed");
      toggleIcon?.classList.remove("left");
      listaFechas?.classList.remove("collapsed");
      this.collapseButton.emit("false");
    }
  }

}
