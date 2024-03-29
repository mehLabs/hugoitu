import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EducationComponent } from 'src/app/body-components/education/education.component';
import { ExperienceComponent } from 'src/app/body-components/experience/experience.component';
import { HomeComponent } from 'src/app/body-components/home/home.component';
import { ProjectsComponent } from 'src/app/body-components/projects/projects.component';
import { SkillsComponent } from 'src/app/body-components/skills/skills.component';
import { TimelineComponent } from 'src/app/body-components/timeline/timeline.component';
import { WelcomeComponent } from 'src/app/body-components/welcome/welcome.component';
import { DataService } from 'src/app/body-services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  loaded:boolean = false;
  uploading:boolean = false;

  constructor(private dataService:DataService) { }


  ngOnInit(): void {
    this.dataService.getLoading().subscribe((isLoading:boolean) => {
      this.uploading = isLoading;
    })

    this.dataService.dlPortfolio().subscribe( (data) =>{
      if (data !== null && data.persona !== undefined){
        this.loaded = true;
      }
    })
    
    setTimeout(() => {
      let componentes = document.getElementsByClassName("component");
      componentes.item(0)?.classList.add("show")
      
      for(let i=1;i<componentes.length;i++){
        let activado = true;
        let componente:Element = componentes.item(i) || new Element;
        window.addEventListener("scroll", () => {
          if (window.innerHeight - 200 >= componente.children[0].getBoundingClientRect().top && activado){
            activado = false;
            componente.classList.add("show")
          }
        });
      }
      
    }, 500);
  }

  
  title = 'hugo-portfolio';
  @Output() detallado:boolean = false;

  @ViewChild(HomeComponent) home:any;
  @ViewChild(SkillsComponent) skills:any;
  @ViewChild(ExperienceComponent) experience:any;
  @ViewChild(EducationComponent) education:any;
  @ViewChild(ProjectsComponent) projects:any;
  @ViewChild(TimelineComponent) timeline:any;
  @ViewChild(WelcomeComponent) welcome:any;

  expand($event:any){
    
    
    let home = document.getElementById("home");
    if ($event === "true"){
      home?.classList.add("expand");

    }else{
      home?.classList.remove("expand");
    }
  }

  showModal(){
    if (this.welcome !== undefined){
      this.welcome.showModal();
      this.home.setLang();
    }else{
      setTimeout(() => {
        this.welcome.showModal();
        this.home.setLang();
      }, 100);
    }
  }

  detailed(isTrue:any){
    if (isTrue===("true")){
      this.home.detallado();
      this.skills.detallado();
      this.education.detallado();
      this.experience.detallado();
      this.projects.detallado();
      this.timeline.detallado();

    }else{
      this.home.detallado();
      this.detallado = false;
      this.skills.detallado();
      this.education.detallado();
      this.experience.detallado();
      this.projects.detallado();
      this.timeline.detallado();
    }
  }


 
  
  /* TODO, this makes browser go above the link when clicking an anchor
  ngOnInit(): void {
    
    window.addEventListener("hashchange", function () {
      this.window.setTimeout
    });

  }
  offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }
  */
    //Continue here https://stackoverflow.com/questions/69615412/how-to-make-the-link-active-change-when-scrolling
}
