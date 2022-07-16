import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;
  constructor(public dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.dlLoginText().subscribe(data => {
      this.data = data;
    })
  }

  linkTo(link:string,...callbacks:Function[]){
    this.router.navigate([link]);
    callbacks.forEach((callback) => callback());
  }
}
