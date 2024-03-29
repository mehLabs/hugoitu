import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';
import { ResumeService } from 'src/app/portfolio-services/resume.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() card:any;
  @Output() updateEvent:EventEmitter<boolean> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<boolean> = new EventEmitter();
  resumir:boolean = false;

  // editing copy&pastle
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
    if (!isEditing){
      this.updateEvent.emit(true);
    }
  }
  //

  constructor(private firebaseStorage:FirebaseStorageService, private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getResumir().subscribe( (isResumir) =>{
      this.resumir = isResumir;
    })
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
