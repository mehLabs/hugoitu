import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  tardando=false;

  ngOnInit(): void {
    setTimeout(() => {
      this.tardando=true;
    }, 5000);
  }

}
