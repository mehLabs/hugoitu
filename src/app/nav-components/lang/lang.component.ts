import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
declare var bootstrap:any;

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
    //SOON this.dataService.toEnglish();
    alert("This option is not able yet! Coming soon.")
  }

  toSpanish(){
    this.dataService.toSpanish();
  }

}
