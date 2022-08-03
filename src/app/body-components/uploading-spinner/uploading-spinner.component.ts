import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploading-spinner',
  templateUrl: './uploading-spinner.component.html',
  styleUrls: ['./uploading-spinner.component.css']
})
export class UploadingSpinnerComponent implements OnInit {
  @Input() uploading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
