import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hugo-portfolio';

  expand($event:any){
    
    let home = document.getElementById("home");
    if ($event === "true"){
      home?.classList.add("expand");
    }else{
      home?.classList.remove("expand");
    }
  }

    //Continue here https://stackoverflow.com/questions/69615412/how-to-make-the-link-active-change-when-scrolling
}
