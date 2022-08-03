import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { updateCurrentUser } from 'firebase/auth';
import { DataService } from 'src/app/body-services/data.service';
import { EditService } from 'src/app/portfolio-services/edit.service';
import { FirebaseStorageService } from 'src/app/portfolio-services/firebase-storage.service';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  animatingB = true;
  data:any = '';
  spanish:boolean = true;
  screenWidth:number = 0;
  perfil:any="";
  editMode:boolean = false;
  
  @ViewChild(AboutComponent) about:any;

  
  // editing copy&pastle
  editing:boolean = false;
  editElement(isEditing:boolean){ //Inicia el proceso de editar un componente
    this.editing = isEditing;
    if (!isEditing){
      this.update();
    }
  }
  //
  
  constructor(
    private dataPortfolio:DataService,
    private editService:EditService,
    private firebaseStorage:FirebaseStorageService
    ) { 
  }


  ngOnInit(): void {
    this.dataPortfolio.dlPortfolioText().subscribe( data => {
      this.data = data.home;
    })

    this.dataPortfolio.dlPortfolio().subscribe( data => {
      this.perfil = data.persona;
    })

    setTimeout( () => {
      this.animating();
    },5000) 
      
    
    this.editService.getEditMode().subscribe(isEditMode => this.editMode = isEditMode);
  }
  detallado(){
    this.about.detallado();
  }

  inputImage(file:any){
    if (file.target.files.length > 0){
      let src = URL.createObjectURL(file.target.files[0]);

      let image;
      //Convert image to canvas
      //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
      this.firebaseStorage.convertToWebP(src).then(webpImage => {
        image = this.firebaseStorage.uploadToFirebase(webpImage,file.target.files[0].name).then( (url) => {
          this.perfil.img_background = url;
          this.update();
        });
      });

      

    }

  }


  animating(){
    let titulo = document.getElementById("title");
    if (this.animatingB){
      titulo?.classList.add("animate");
    }else{
      titulo?.classList.remove("animate");
    }
  }

  ngOnDestroy(){
  }

  setLang(){
    if (this.dataPortfolio.isSpanish()){
      this.spanish = true;
    }else{
      this.spanish = false;
    }
  }

  update(){
    this.dataPortfolio.update(this.perfil,"persona");
  }
}
