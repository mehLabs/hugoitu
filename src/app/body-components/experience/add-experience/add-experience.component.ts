import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  @Output() adding:EventEmitter<any> = new EventEmitter();
  @Input() addMode:boolean=false;

  card:any = {
    id_experiencia_laboral: null,
    empresa: '',
    descripcion: "",
    inicio: "",
    fin: "",
    opcional: false,
    posicion: "",
    color: "#ffffff",
    img: ""
  };


  constructor(private firebaseStorage:FirebaseStorageService) { }

  ngOnInit(): void {
    console.log("CREANDO CARD: "+this.card.img.length)
  }

  addExperience(){
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
