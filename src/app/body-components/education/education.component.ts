import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;
  data:any = '';

  constructor(private dataS: DataService) { }


  ngOnInit(): void {
    this.dataS.dlPortfolioText().subscribe(data => {
      this.data = data.education;
      setTimeout( () => {
        this.opcionales = document.querySelectorAll(".optional");

      },10)
    })

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
