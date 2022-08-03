import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() card:any;
  @Output() updateEvent:EventEmitter<boolean> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<boolean> = new EventEmitter();

  // editing copy&pastle
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
  }
  //

  constructor(private firebaseStorage:FirebaseStorageService) { }

  ngOnInit(): void {
  }
  
  deleteElement(event:any){
    this.deleteEvent.emit(event);
  }

  inputImage(file:any,card:any){
    if (file.target.files.length > 0){
      let src = URL.createObjectURL(file.target.files[0]);

      let image;
      //Convert image to canvas
      //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
      this.firebaseStorage.convertToWebP(src).then(webpImage => {
        image = this.firebaseStorage.uploadToFirebase(webpImage,file.target.files[0].name).then( (url) => {
          console.log(card);
          card.img = url;
          this.updateEvent.emit(true);
        });
      });

      

    }

  }

}
