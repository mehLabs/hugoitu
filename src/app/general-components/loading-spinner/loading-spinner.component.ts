import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  loaded:any = false;
  @Output() pageLoaded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(document.readyState);
    if(document.readyState === "complete"){
      this.loaded=true;
      this.pageLoaded.emit("true");
    }else{
      document.addEventListener('readystatechange', (event:any) => {
        console.log(event);
        if (event?.target.readyState === "complete") {
          this.loaded=true;
          this.pageLoaded.emit("true");
        }
      })
    }
  }
}
