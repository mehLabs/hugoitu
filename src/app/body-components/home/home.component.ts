import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { ScrollSpyService } from 'src/app/body-services/scroll-spy.service';
import { DarkModeService } from 'src/app/general-services/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() detallado = new EventEmitter;
  animatingB = true;
  checked = false;
  data:any = '';
  spanish:boolean = true;
  screenWidth:number = 0;
  
  constructor(
    private dataPortfolio:DataService,
    private darkMode:DarkModeService,
    private scroll:ScrollSpyService
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
      

    var button = document.querySelector('#resumeButton');
    var buttonHeight = 0;
    if (button?.clientHeight !== undefined){
      buttonHeight = button?.clientHeight;
    }
    var altura = window.innerHeight;
    

    this.screenWidth = this.scroll.getScreenWidth();
    this.scroll.getPageYOfsset().subscribe( (y) => {
      if (this.screenWidth < 992){        
        if (y >= altura - (buttonHeight*2)){
            button?.classList.add('fixed');
        }else{
            button?.classList.remove('fixed');
        }
      }else{
        if (y >= altura - (buttonHeight*3)){
          button?.classList.add('fixed');
        }else{
            button?.classList.remove('fixed');
        }
      }
    })
  }

  setDarkMode(){
    this.darkMode.setDarkMode();
  }


  animating(){
    let titulo = document.getElementById("title");
    if (this.animatingB){
      titulo?.classList.add("animate");
    }else{
      titulo?.classList.remove("animate");
    }
  }

  check(){
    this.checked = !this.checked;
    if (this.checked){
      this.detallado.emit("true");
      console.log("Checkeado!");
    }else{
      this.detallado.emit("false");
      console.log("Not checked");
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
