import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() detallado = new EventEmitter;
  animatingB = false;
  checked = false;
  
  constructor() { 

  }

  

  ngOnInit(): void {
    let intervalId = setInterval(this.animating,2500);

    var button = document.querySelector('#resumeButton');
    var buttonHeight = 0;
    if (button?.clientHeight !== undefined){
      buttonHeight = button?.clientHeight;
    }
    var altura = window.innerHeight;

    window.addEventListener('scroll', function (e) {
      
      let distancia = window.pageYOffset;

      
      if (distancia >= altura - (buttonHeight*2)){
          button?.classList.add('fixed');
      }else{
          button?.classList.remove('fixed');
      }
      
    });
  }

  animating(){
    let titulo = document.getElementById("title");
    if (this.animatingB){
      titulo?.classList.add("animate");
    }else{
      titulo?.classList.remove("animate");
    }
    this.animatingB = !this.animatingB;
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

}
