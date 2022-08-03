import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  @Input() addMode:boolean =false;
  @Output() adding:EventEmitter<any> = new EventEmitter();

  card = {
    color: "",
    descripcion: "",
    escuela: "",
    fin: "",
    img: "",
    inicio: "",
    opcional: 0,
    titulo: ""
  }

  constructor(private firebaseStorage: FirebaseStorageService) { }

  ngOnInit(): void {
  }

  addEducacion(){
    this.adding.emit(this.card);
  }

  inputImage(file:any){
    if (file.target.files.length > 0){
      let src = URL.createObjectURL(file.target.files[0]);

      let image;
      //Convert image to canvas
      //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
      this.firebaseStorage.convertToWebP(src).then(webpImage => {
        image = this.firebaseStorage.uploadToFirebase(webpImage,file.target.files[0].name).then( (url) => {
          this.card.img = url;
        });
      });

      

    }

  }

}
