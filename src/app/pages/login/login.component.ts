import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { DataService } from 'src/app/body-services/data.service';
import { LoginService } from 'src/app/login-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;
  loading:boolean = false;


  wrong:boolean=false;
  tries:number = 0;

  username = new FormControl("");
  password = new FormControl("");

  constructor(public dataService:DataService, private router:Router, private loginService:LoginService) { }



  ngOnInit(): void {
    this.dataService.dlLoginText().subscribe(data => {
      this.data = data;
    })
  }

  login(){
    this.loading = true;
    let loginCredentials = {
      "username": this.username.value,
      "password": this.password.value
    }

    this.loginService.sendCredentials(loginCredentials).subscribe((response:any) => {
      if (response.status === 200){
        this.loading = false;
        this.loginService.storeCredentials(response.body.token);
        this.wrong = false;
        this.linkTo("/");
      }
    },
    (error => {
      this.loading = false;
      this.wrong = true;
      }
    ))
    
  }

  test(){
    
    this.loginService.test().subscribe((data:any) => alert("SERVER FUNCIONANDO, DICE: "+data))
  }

  linkTo(link:string,...callbacks:Function[]){
    this.router.navigate([link]);
    callbacks.forEach((callback) => callback());
  }
}
