import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  detailed:boolean = false;
  opcionales:any;
  data:any[] = [];
  editMode:boolean=false;
  addMode:boolean = false;

  context:any = '';

  
  

  constructor(
    private dataS: DataService, 
    private editService:EditService,
    ) { }


  ngOnInit(): void {
    this.editService.getEditMode().subscribe(isEditMode => this.editMode = isEditMode);

    this.dataS.dlPortfolioText().subscribe( data => this.context = data.education);

    this.dataS.dlPortfolio().subscribe(data => {
      this.data = data.educacion;
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

  uploadImg(card:any){
    let fileUploader = document.getElementById("fileInput"+card.id_educacion);
    fileUploader?.click;
  }

  addEvent(educacion:any){
    this.data.unshift(educacion);
    this.update()
  }

  deleteElement(educacion:any){
    this.data = this.data.filter((elemento) => elemento != educacion);
    this.update()
  }

  update(){
    this.dataS.update(this.data,"educacion");
  }

}
