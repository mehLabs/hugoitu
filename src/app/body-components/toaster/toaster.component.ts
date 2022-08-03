import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
declare var bootstrap:any;

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.isSaved().subscribe( (isSaved:boolean) => {
      if (isSaved){
        this.showToast();
      }
    })
  }

  showToast(){
    const toaster = document.getElementById('toast');

    const toast = new bootstrap.Toast(toaster);

    toast.show();
  }

}
