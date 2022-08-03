import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-delete-section-btn',
  templateUrl: './delete-section-btn.component.html',
  styleUrls: ['./delete-section-btn.component.css']
})
export class DeleteSectionBtnComponent implements OnInit {
  @Input() object:Object|undefined;
  
  editMode:any;

  constructor(private editService:EditService) { }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode
    });
  }

  delete(){
    
  }

}
