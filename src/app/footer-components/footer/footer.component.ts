import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data;
    })
  }

}
