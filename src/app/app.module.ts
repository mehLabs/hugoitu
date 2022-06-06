import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip'

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
import { HomeComponent } from './body-components/home/home.component';
import { SocialMediaComponent } from './general-components/social-media/social-media.component';
import { ScrollTopBtnComponent } from './general-components/scroll-top-btn/scroll-top-btn.component';
import { WelcomeComponent } from './body-components/welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { LangComponent } from './nav-components/lang/lang.component';
import { LoadingSpinnerComponent } from './general-components/loading-spinner/loading-spinner.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { LoginBtnComponent } from './body-components/login-btn/login-btn.component';

import { AuthModule } from '@auth0/auth0-angular';
import { RouterModule, Routes} from '@angular/router';

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
    HomeComponent,
    SocialMediaComponent,
    ScrollTopBtnComponent,
    WelcomeComponent,
    LangComponent,
    LoadingSpinnerComponent,
    PortfolioComponent,
    LoginComponent,
    Page404Component,
    LoginBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3c83cuvr.us.auth0.com',
      clientId: 'QJM7sOvyhUyPMXkNalw3VSkYcEL3JORR'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
