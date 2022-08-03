import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent implements OnInit {
  editing:boolean = false;

  constructor(private editService:EditService, private dataService:DataService) { }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe(edit => this.editing = edit)
  }

  toggleEditMode(){
    this.editService.toggleEdit();
    this.editService.getEditMode().subscribe((isEditMode) => {
      if (!isEditMode){
        this.dataService.cancel();
      }
    }).unsubscribe();
  }

}
