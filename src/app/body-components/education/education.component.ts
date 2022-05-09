import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;
  constructor() { }

  ngOnInit(): void {
    this.opcionales = document.querySelectorAll(".optional");
  }

  detallado(){
    this.detailed = !this.detailed
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
