import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;

  constructor() { }

  ngOnInit(): void {
    this.opcionales = document.querySelectorAll(".optional");
  }

  detallado(){
    this.detailed = !this.detailed;
    if (this.detailed){
      for (let element of this.opcionales){
        element.classList.remove("optional");
      }
    }else{
      for (let element of this.opcionales){
        element.classList.add("optional");
      }
    }
  }

}
