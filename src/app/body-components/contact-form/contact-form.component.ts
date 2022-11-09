import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder) { }

  messageToSend = this.fb.group({
    name: ['', Validators.required],
    _replyto :['', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    message: ['', Validators.required],
    _optin: [false],
    address: ['', Validators.required],

  })

  get formControls() {
    return this.messageToSend.controls;
  }

  loading:boolean = false;
  success = false;

  submit(event:any){
    if(this.messageToSend.valid){
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
  }

  ngOnInit(): void {
      
  }

}
