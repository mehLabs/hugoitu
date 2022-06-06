import { Component, OnInit } from '@angular/core';
import { MatTooltipModule} from '@angular/material/tooltip';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe( (data) => {
      this.data = data.navbar;
    })
  }

}
