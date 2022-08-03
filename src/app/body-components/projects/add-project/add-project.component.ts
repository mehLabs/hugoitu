import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() addProyecto:EventEmitter<any> = new EventEmitter();

  project = {
    description: "",
    enlace:"",
    id_proyecto:"",
    img:"",
    title:""
  }

  constructor(private firebaseStorage:FirebaseStorageService) { }

  ngOnInit(): void {
  }

  newProyecto(){
    this.addProyecto.emit(this.project);
  }

  inputImage(file:any){
    if (file.target.files.length > 0){
      let src = URL.createObjectURL(file.target.files[0]);

      let image;
      //Convert image to canvas
      //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
      this.firebaseStorage.convertToWebP(src).then(webpImage => {
        image = this.firebaseStorage.uploadToFirebase(webpImage,file.target.files[0].name).then( (url) => {
          this.project.img = url;
        });
      });

      

    }

  }

}
