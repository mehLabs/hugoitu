import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit {
  data:any;
  constructor(private dataService:DataService, public auth:AuthService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.loginbtn;
    })
  }

}
