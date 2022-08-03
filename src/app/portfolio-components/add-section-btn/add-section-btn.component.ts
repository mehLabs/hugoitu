import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-add-section-btn',
  templateUrl: './add-section-btn.component.html',
  styleUrls: ['./add-section-btn.component.css']
})
export class AddSectionBtnComponent implements OnInit {

  @Output() adding: EventEmitter<boolean> = new EventEmitter();
  @Input() add:boolean =false;
  @Input() texto:string = "Añadir contenido";

  editMode:any;

  constructor(private editService:EditService) { }

  emitAdd(){
    this.add = !this.add;
    this.adding.emit(this.add);
  }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode
    });
  }

}
