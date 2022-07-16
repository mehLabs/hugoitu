import { Component, OnInit, Output, Renderer2 } from '@angular/core';
import { MatTooltipModule} from '@angular/material/tooltip';
import { DataService } from 'src/app/body-services/data.service';
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data:any;
  width:number;
  ancho:boolean = false;
  @Output() detallado = new EventEmitter();



  constructor(private dataService:DataService) {
    this.width = window.innerWidth;
    if (this.width >= 992){
      this.ancho = true;
    }
   }

  ngOnInit(): void {

    this.dataService.dlPortfolioText().subscribe( (data) => {
      this.data = data.navbar;
    })

    window.addEventListener('resize', () => {
      let width = window.innerWidth;
      if (this.ancho === false && width >= 992){
        this.ancho = true;
      }else if(this.ancho === true && width < 992){
        this.ancho = false;
      }
    })
  }
  check(resumir:boolean){
    if (resumir){
      this.detallado.emit("true");
    }else{
      this.detallado.emit("false");
    }
  }

}
