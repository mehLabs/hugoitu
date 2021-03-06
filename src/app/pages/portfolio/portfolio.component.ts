import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AboutComponent } from 'src/app/body-components/about/about.component';
import { EducationComponent } from 'src/app/body-components/education/education.component';
import { ExperienceComponent } from 'src/app/body-components/experience/experience.component';
import { HomeComponent } from 'src/app/body-components/home/home.component';
import { ProjectsComponent } from 'src/app/body-components/projects/projects.component';
import { SkillsComponent } from 'src/app/body-components/skills/skills.component';
import { TimelineComponent } from 'src/app/body-components/timeline/timeline.component';
import { WelcomeComponent } from 'src/app/body-components/welcome/welcome.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
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
  @ViewChild(AboutComponent) about:any;

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
      this.about.detallado();
      this.skills.detallado();
      this.education.detallado();
      this.experience.detallado();
      this.projects.detallado();
      this.timeline.detallado();

    }else{
      this.about.detallado();
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
