import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;
  data:any = "";
  proyectos:any[] = [];
  addMode:boolean = false;
  editMode:boolean = false;

  constructor(private dataService:DataService, private editService:EditService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.projects;
      setTimeout(() => {
        this.opcionales = document.querySelectorAll(".optional");
      }, 10);
    })

    this.dataService.dlPortfolio().subscribe(data => {
      if (data.proyectos !== undefined){
        this.proyectos = data.proyectos.map((element:any) => ({
          ...element,
          edit: false
        }));

      }
    })

    
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode
    });
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

  deleteElement(card:any){
    this.proyectos = this.proyectos.filter( (element:any) => element != card);
    this.dataService.update(this.proyectos,"proyectos");
  }

  addProyecto(proyecto:any){
    this.proyectos.unshift(proyecto);
    this.dataService.update(this.proyectos,"proyectos");
  }

  update(){
    this.dataService.update(this.proyectos,"proyectos");  
  }

}
