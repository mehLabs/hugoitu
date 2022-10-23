import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';
import {DomSanitizer} from '@angular/platform-browser';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-home-profile-picture',
  templateUrl: './home-profile-picture.component.html',
  styleUrls: ['./home-profile-picture.component.css']
})
export class HomeProfilePictureComponent implements OnInit {
  @Input()data:any;
  editMode:boolean=false;
  img:any;
  
  // editing copy&pastle
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
    if (!isEditing){
      this.dataService.update(this.data,"persona");
    }
  }
  //

  constructor(
    private editService:EditService, 
    private dataService:DataService, 
    private sanitizer:DomSanitizer,
    private firebaseStorage:FirebaseStorageService
    ) { }

  inputImage(event:any){
    if (event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);

      let image;
      //Convert image to canvas
      //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
      this.firebaseStorage.convertToWebP(src).then(webpImage => {
        image = this.firebaseStorage.uploadToFirebase(webpImage,event.target.files[0].name).then( (url) => {
          console.log(url);
          this.data.img_perfil = url;
          this.dataService.update(this.data,"persona");

        });
      });

      

    }
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

  ngOnInit(): void {
    this.editService.getEditMode().subscribe( (isEditMode) => {
      this.editMode = isEditMode;
    })
  }

}
