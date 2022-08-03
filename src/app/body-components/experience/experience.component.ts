import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  detailed:boolean = false;
  data:any = "";
  portfolio:any[] = [];
  addMode:boolean = false;
  
  // editing copy&pastle
  editing:boolean = false;
  editMode:boolean =false;
  editElement(card:any){ //Inicia el proceso de editar un componente
    card.edit = !card.edit;
    console.log(card.edit);
  }
  //

  constructor(private dataService:DataService, private editService:EditService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.experience;
    })

    this.dataService.dlPortfolio().subscribe(data => {
      if (data.experienciaLaboral !== undefined){
        this.portfolio = data.experienciaLaboral.map((element:any) => ({
          ...element,
          edit: false
        }));

      }
    })

    this.editService.getEditMode().subscribe( (isEditMode:any) => {
      this.editMode = isEditMode
    });
  }

  addEvent(experiencia:any){
    this.portfolio.unshift(experiencia);
    this.addMode = false;
    this.update();
  }

  update(){
    this.dataService.update(this.portfolio,"experienciaLaboral")
  }

  detallado(){
    this.detailed = !this.detailed;

    /*
    if (this.detailed){
      document.getElementById("camillero")?.classList.remove("hide");
      document.getElementById("optional")?.classList.add("hide");
    }else{
      
      document.getElementById("camillero")?.classList.add("hide");
      document.getElementById("optional")?.classList.remove("hide");
    }
    */
  }

  deleteElement(card:any){
    this.portfolio = this.portfolio.filter((element) => element != card);
    this.dataService.update(this.portfolio,"experienciaLaboral")
  }

}
