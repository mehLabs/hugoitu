import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EventEmitter } from '@angular/core';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any = '';

  constructor(private dataS: DataService, private editService:EditService) { }

  ngOnInit(): void {
    this.dataS.dlPortfolio().subscribe(data => {
      this.data = data.persona;
      this.dataS.checkLoaded();
    })

  }

  
  // editing copy&pastle
  editingAbout:boolean = false;
  editAbout(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editingAbout = isEditing;
    if (!isEditing){
      this.dataS.update(this.data,"persona");
    }
  }

  editingNombre:boolean = false;
  editNombre(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editingNombre = isEditing;
    if (!isEditing){
      this.dataS.update(this.data,"persona");
    }
  }
  //


  detallado(){
    console.log("about detallado")
    let about = document.getElementById("accordionAbout");
      about?.classList.toggle("show");
  }

}
