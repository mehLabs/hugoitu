import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any = '';

  constructor(private dataS: DataService) { }

  ngOnInit(): void {
    this.dataS.dlPortfolioText().subscribe(data => {
      this.data = data.about;
      this.dataS.checkLoaded();
    })
  }

}
