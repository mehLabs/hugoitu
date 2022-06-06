import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dlLoginText().subscribe(data => {
      this.data = data;
    })
  }

}
