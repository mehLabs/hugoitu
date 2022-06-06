import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;
  data:any = "";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.projects;
      setTimeout(() => {
        this.opcionales = document.querySelectorAll(".optional");
      }, 10);
    })
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
