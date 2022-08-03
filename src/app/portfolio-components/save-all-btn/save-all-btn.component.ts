import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';

@Component({
  selector: 'app-save-all-btn',
  templateUrl: './save-all-btn.component.html',
  styleUrls: ['./save-all-btn.component.css']
})
export class SaveAllBtnComponent implements OnInit {
  editMode:boolean = false;

  constructor(private editService:EditService, private dataService:DataService) { }

  ngOnInit(): void {
    this.editService.getEditMode().subscribe((edit:boolean) => this.editMode = edit)
  }

  save(){
    this.dataService.saveAll();
  }

}
