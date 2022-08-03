import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-edit-section-btn',
  templateUrl: './edit-section-btn.component.html',
  styleUrls: ['./edit-section-btn.component.css']
})
export class EditSectionBtnComponent implements OnInit {
  @Output() editing:EventEmitter<boolean> = new EventEmitter();
  isEditing = false;

  @Input() object:Object|undefined;

  editMode:any;

  constructor(private editService:EditService) { }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      if(this.isEditing && !isEditMode){
        this.edit();
      }
      this.editMode = isEditMode
    });
  }

  edit(){
    this.isEditing = !this.isEditing;
    this.editing.emit(this.isEditing);
  }

}
