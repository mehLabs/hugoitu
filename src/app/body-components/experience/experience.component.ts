import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  detailed:boolean = false;
  data:any = "";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.experience;
    })
  }

  detallado(){
    this.detailed = !this.detailed;
    if (this.detailed){
      document.getElementById("camillero")?.classList.remove("hide");
      document.getElementById("optional")?.classList.add("hide");
    }else{
      
      document.getElementById("camillero")?.classList.add("hide");
      document.getElementById("optional")?.classList.remove("hide");
    }
  }

}
