import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  detailed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  detallado(){
    this.detailed = !this.detailed;
    if (this.detailed){
      document.getElementById("camillero")?.classList.remove("hide");
      document.getElementById("optional")?.classList.add("hide");
    }else{
      
      document.getElementById("camillero")?.classList.add("hide");
      document.getElementById("optional")?.classList.remove("hide");
    }
  }

}
