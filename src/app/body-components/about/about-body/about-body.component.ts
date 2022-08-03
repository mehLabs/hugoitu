import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.css']
})
export class AboutBodyComponent implements OnInit {
  @Input() data:any;

  // editing copy&pastle
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
  }
  //

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
