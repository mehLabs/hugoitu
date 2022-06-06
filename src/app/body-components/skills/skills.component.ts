import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/body-services/data.service';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';

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

  constructor(private dataS: DataService, private scroll:ScrollSpyService) {
    this.barras = document.querySelectorAll('.progress-bar'); }

  ngOnInit(): void {
    this.dataS.dlPortfolioText().subscribe(data => {
      this.data = data.skills;
    })
    this.barras = document.querySelectorAll('.progress-bar');
    this.opcionales = document.querySelectorAll(".optional");
    let altura = window.innerHeight;
    console.log(altura)
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
}

