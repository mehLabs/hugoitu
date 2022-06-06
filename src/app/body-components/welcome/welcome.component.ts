import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.welcome
    })
    
  }

  showModal(){
    document.getElementById("openModalButton")?.click();
  }

}
