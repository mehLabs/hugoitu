import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/body-services/data.service';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {
  @Input() proyecto:any;
  @Output() update:EventEmitter<boolean> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter();

  constructor(private firebaseStorage:FirebaseStorageService) { }

  ngOnInit(): void {
  }
  
  editElement(card:any){
    card.edit = !card.edit;
    console.log(card.edit)
    if (card.edit === false){
      this.update.emit(true);
    }
  }

  
  deleteElement(card:any){
    this.deleteEvent.emit(card);
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
          this.update.emit(true);
        });
      });

      

    }

  }

}
