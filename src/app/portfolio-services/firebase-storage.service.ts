import { Injectable } from '@angular/core';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UploadResult, UploadTask } from 'firebase/storage';

firebase.initializeApp(environment.firebase); //INIZIALIZA FIREBASE PARA USARLO ACÁ


@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  basePath = '/uploads'
  
  storageRef = firebase.app().storage().ref();


  constructor() { }

  inputImage(file:any,img:any){
      if (file.target.files.length > 0){
        let src = URL.createObjectURL(file.target.files[0]);
  
        let image;
        //Convert image to canvas
        //this.firebaseStorage.convertToWebP(src).then(webpImage => this.data.img_perfil = webpImage);
        this.convertToWebP(src).then(webpImage => {
          image = this.uploadToFirebase(webpImage,file.target.files[0].name).then( (url) => {
            img.img = url;
          });
        });
  
        
  
      }
  }

  convertToWebP(src:any):Promise<any>{
    console.log(src);

    

    return new Promise((resolve,reject) =>{
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d");

      let userImage = new Image();
      userImage.src = src;

      userImage.onload = () => {
        canvas.width = userImage.width;
        canvas.height = userImage.height;
        ctx?.drawImage(userImage, 0, 0);

        // convert canvas to webp
        let webpImage = canvas.toDataURL("image/webp", 0.4);

        resolve(webpImage);

      }
    })
  }

  async uploadToFirebase(imageDataURL:any,fileName:string):Promise<string>{
    //Obteniendo token para firebase
    
    const filePath = `${this.basePath}/${fileName}_${this.crearId(5)}`;
    
    let respuesta = this.storageRef.child(filePath).putString(imageDataURL,'data_url');
    return await (await respuesta).ref.getDownloadURL();

    

    //Crear referencia de acceso


    //const storageRef = this.storage.ref(filePath);
    
    //return uploadString(storageRef,imageDataURL,'data_url');
  }

  protected crearId(largo:number){ //Crea un ID al azar, la entrada es el largo de la cadena.
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
  }

}
