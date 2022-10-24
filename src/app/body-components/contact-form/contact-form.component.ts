import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  messageToSend = new FormGroup({
    name: new FormControl(''),
    _replyto :new FormControl(''),
    message: new FormControl(''),
    _optin: new FormControl(false),
    address: new FormControl(''),

  })

  loading:boolean = false;
  success = false;

  submit(event:any){
    this.loading = true;
    const body = this.messageToSend.value;
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    console.log(body);
    this.http.post("https://formspree.io/f/xlevpeqe",{
      body
    },{"headers":headers}).subscribe((answer)=>{
      this.loading=false;
      console.log(answer)}
      );
    this.success=true;
  }

  ngOnInit(): void {
      
  }

}
