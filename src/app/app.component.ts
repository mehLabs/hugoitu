import { Component, HostListener, Output, ViewChild } from '@angular/core';
import { AboutComponent } from './body-components/about/about.component';
import { EducationComponent } from './body-components/education/education.component';
import { ExperienceComponent } from './body-components/experience/experience.component';
import { ProjectsComponent } from './body-components/projects/projects.component';
import { SkillsComponent } from './body-components/skills/skills.component';
import { TimelineComponent } from './body-components/timeline/timeline.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hugo-portfolio';
  @Output() detallado:boolean = false;

  @ViewChild(SkillsComponent) skills:any;
  @ViewChild(ExperienceComponent) experience:any;
  @ViewChild(EducationComponent) education:any;
  @ViewChild(ProjectsComponent) projects:any;
  @ViewChild(TimelineComponent) timeline:any;

  expand($event:any){
    
    
    let home = document.getElementById("home");
    if ($event === "true"){
      home?.classList.add("expand");

    }else{
      home?.classList.remove("expand");
    }
  }

  detailed(isTrue:any){
    let about = document.getElementById("accordionAbout");
    if (isTrue===("true")){
      about?.classList.add("show");
      this.skills.detallado();
      this.education.detallado();
      this.experience.detallado();
      this.projects.detallado();
      this.timeline.detallado();

    }else{
      about?.classList.remove("show");
      this.detallado = false;
      this.skills.detallado();
      this.education.detallado();
      this.experience.detallado();
      this.projects.detallado();
      this.timeline.detallado();
    }
  }

    //Continue here https://stackoverflow.com/questions/69615412/how-to-make-the-link-active-change-when-scrolling
}
