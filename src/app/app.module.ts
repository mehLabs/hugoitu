import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './body-components/about/about.component';
import { SkillsComponent } from './body-components/skills/skills.component';
import { EducationComponent } from './body-components/education/education.component';
import { ExperienceComponent } from './body-components/experience/experience.component';
import { ProjectsComponent } from './body-components/projects/projects.component';
import { FooterComponent } from './footer-components/footer/footer.component';
import { NavbarComponent } from './nav-components/navbar/navbar.component';
import { TimelineComponent } from './body-components/timeline/timeline.component';
import { ScrollSpyDirective } from './body-directives/scroll-spy.directive';
import { HomeComponent } from './body-components/home/home.component';
import { SocialMediaComponent } from './general-components/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    TimelineComponent,
    ScrollSpyDirective,
    HomeComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
