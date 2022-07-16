import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() detallado = new EventEmitter;
  
  animatingB = true;
  data:any = '';
  spanish:boolean = true;
  screenWidth:number = 0;
  
  constructor(
    private dataPortfolio:DataService
    ) { 
  }


  ngOnInit(): void {
    this.dataPortfolio.dlPortfolioText().subscribe( data => {
      console.log(data);
      this.data = data.home;
    })

    setTimeout( () => {
      this.animating();
    },5000) 
      

    
  }



  animating(){
    let titulo = document.getElementById("title");
    if (this.animatingB){
      titulo?.classList.add("animate");
    }else{
      titulo?.classList.remove("animate");
    }
  }

  check(resumir:boolean){
    if (resumir){
      this.detallado.emit("true");
    }else{
      this.detallado.emit("false");
    }
  }

  ngOnDestroy(){
  }

  setLang(){
    if (this.dataPortfolio.isSpanish()){
      this.spanish = true;
    }else{
      this.spanish = false;
    }
  }
}
