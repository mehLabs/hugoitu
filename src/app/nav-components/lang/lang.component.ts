import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  toEnglish(){
    this.dataService.toEnglish();
  }

  toSpanish(){
    this.dataService.toSpanish();
  }

}
