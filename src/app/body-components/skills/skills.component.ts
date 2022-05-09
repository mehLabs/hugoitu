import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  document:any;
  detailed:boolean = false;
  opcionales:any;
  constructor() { }

  ngOnInit(): void {
    this.opcionales = document.querySelectorAll(".optional");
    var barras = document.querySelectorAll('.progress-bar');
    var altura = window.innerHeight;

    window.addEventListener('scroll', function (e) {
      

      for(let i=0;i<barras.length;i++){
      
      let distancia = barras[i].getBoundingClientRect().top;

      
      if (distancia <= altura){
          barras[i].classList.add('aparece');
      }else{
          barras[i].classList.remove('aparece');
      }
      }
    });

    let largoBarra = document.getElementById("bar")?.clientWidth;
      setTimeout( () => {
        for (let i=0;i<barras.length;i++){
          let barra = barras[i].clientWidth;
          
          if (largoBarra !== undefined){
            
            if (barra > (largoBarra*0.7)){
              
              barras[i].classList.add('green');
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

