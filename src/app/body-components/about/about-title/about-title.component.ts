import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-about-title',
  templateUrl: './about-title.component.html',
  styleUrls: ['./about-title.component.css']
})
export class AboutTitleComponent implements OnInit {
  @Input() data:any;
  editing:boolean = false;
  editMode:boolean = false;

  constructor(private editService:EditService) { }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode;
    })
  }

  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
  }
}
