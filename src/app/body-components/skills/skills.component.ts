import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';
import { EditService } from 'src/app/portfolio-services/edit.service';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  document:any;
  detailed:boolean = false;
  opcionales:any;
  data:any = '';
  barras:NodeListOf<Element>;
  portfolio:any[] = [];


  adding:boolean=false;

  
  // editing copy&pastle
  editMode:boolean = false;
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    if (!isEditing){
      this.categorias = this.agrupar(this.portfolio);
      this.dataS.update(this.portfolio,"tecnologias")

    }
  }
  //

  async inputImage(file:Event,obj:any){
    obj.img = '';
    this.firebase.inputImage(file,obj);

  }

  categorias:any;

  Object = Object;

  constructor(
    private dataS: DataService, 
    private firebase:FirebaseStorageService,
    private scroll:ScrollSpyService,
    private editService:EditService
    ) {
    this.barras = document.querySelectorAll('.progress-bar'); }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode
    })

    this.dataS.dlPortfolioText().subscribe(data => {
      this.data = data.skills;
    })
    this.dataS.dlPortfolio().subscribe(data => {
      this.portfolio = data.tecnologias;
      
      this.categorias = this.agrupar(this.portfolio)
      console.log(this.categorias);


      
    })

    
    


    this.barras = document.querySelectorAll('.progress-bar');
    this.opcionales = document.querySelectorAll(".optional");
    let altura = window.innerHeight;
    this.scroll.getPageYOfsset().subscribe ( (y) => {
      for(let i=0;i<this.barras.length;i++){
      
        let barraY:number = this.barras[i].getBoundingClientRect().top;
        if (barraY - altura < 0){
            this.barras[i].classList.add('aparece');
        }else{
            this.barras[i].classList.remove('aparece');
        }
      }
    })



    let largoBarra = document.getElementById("bar")?.clientWidth;
      setTimeout( () => {
        for (let i=0;i<this.barras.length;i++){
          let barra = this.barras[i].clientWidth;
          
          if (largoBarra !== undefined){
            
            if (barra > (largoBarra*0.7)){
              
              this.barras[i].classList.add('green');
            }
          }
      }
    },1000)
    
  }

  addEvent($event:boolean){
    this.adding = $event;
    console.log($event);
  }

  agrupar(original:any[]){
    if (original !== undefined && original !== null){
      let agrupado;
      agrupado = original.reduce((grupo,tecnologia) => {
        //No es muy escalable pero lo necesito para editar elementos en este componente
        tecnologia.edit = false;
        //
        const {categoria} = tecnologia;
        grupo[categoria] = grupo[categoria] ?? [];
        grupo[categoria].push(tecnologia);
        return grupo;
      }, {});
      return agrupado;
    }
    return null;
  }


  detallado(){
    this.detailed = !this.detailed;

    if (this.detailed){
      for (let element of this.opcionales){
        element.classList.remove("optional");
      }
    }else{
      for (let element of this.opcionales){
        element.classList.add("optional")
      }
    }
  }

  newSkill(skill:any){

    this.adding = false;
    console.log(skill);
    this.portfolio.push(skill);
    this.categorias = this.agrupar(this.portfolio);
    this.dataS.update(this.portfolio,"tecnologias")

  }

  deleteSkill(skill:any){
    this.portfolio = this.portfolio.filter( (oSkill) => oSkill != skill);
    this.categorias = this.agrupar(this.portfolio);
  }


}

