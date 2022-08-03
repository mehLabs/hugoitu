import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { LoginService } from 'src/app/login-services/login.service';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit {

  logged:boolean | undefined;
  data:any;
  constructor(private dataService:DataService, private authService:LoginService) { }

  ngOnInit(): void {
    this.dataService.dlPortfolioText().subscribe(data => {
      this.data = data.loginbtn;
    })

    this.authService.isAuthenticated().subscribe( isLogged => this.logged = isLogged);


  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }

}
