import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LangComponent } from './nav-components/lang/lang.component';
import { LoadingSpinnerComponent } from './general-components/loading-spinner/loading-spinner.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { LoginBtnComponent } from './body-components/login-btn/login-btn.component';

import { ResumeButtonComponent } from './body-components/home/resume-button/resume-button.component';
import { DarkModeBtnComponent } from './body-components/dark-mode-btn/dark-mode-btn.component';
import { SettingsComponent } from './general-components/settings/settings.component';
import { RightSideBtnsComponent } from './nav-components/right-side-btns/right-side-btns.component';
import { EditProfileComponent } from './general-components/admin/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBtnComponent } from './body-components/edit-btn/edit-btn.component';
import { AboutTitleComponent } from './body-components/about/about-title/about-title.component'; 
import { AboutBodyComponent } from './body-components/about/about-body/about-body.component';
import { EditSectionBtnComponent } from './portfolio-components/edit-section-btn/edit-section-btn.component';
import { HomeProfilePictureComponent } from './body-components/home/home-profile-picture/home-profile-picture.component';
import { DeleteSectionBtnComponent } from './portfolio-components/delete-section-btn/delete-section-btn.component';
import { AddSectionBtnComponent } from './portfolio-components/add-section-btn/add-section-btn.component';
import { AddSkillComponent } from './body-components/skills/add-skill/add-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddExperienceComponent } from './body-components/experience/add-experience/add-experience.component';
import { AddProjectComponent } from './body-components/projects/add-project/add-project.component';
import { AddEducationComponent } from './body-components/education/add-education/add-education.component';
import { SaveAllBtnComponent } from './portfolio-components/save-all-btn/save-all-btn.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { StorageModule } from '@angular/fire/storage';
import { ToasterComponent } from './body-components/toaster/toaster.component';
import { EducationCardComponent } from './body-components/education/education-card/education-card.component';
import { ExperienceCardComponent } from './body-components/experience/experience-card/experience-card.component';
import { ProjectsCardComponent } from './body-components/projects/projects-card/projects-card.component';
import { UploadingSpinnerComponent } from './body-components/uploading-spinner/uploading-spinner.component';
import { VideoComponent } from './body-components/home/video/video.component';
import { ContactFormComponent } from './body-components/contact-form/contact-form.component';
import { DownloadBtnComponent } from './body-components/download-btn/download-btn.component';


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
    LoginBtnComponent,
    ResumeButtonComponent,
    DarkModeBtnComponent,
    SettingsComponent,
    RightSideBtnsComponent,
    EditProfileComponent,
    EditBtnComponent,
    AboutTitleComponent,
    AboutBodyComponent,
    EditSectionBtnComponent,
    HomeProfilePictureComponent,
    DeleteSectionBtnComponent,
    AddSectionBtnComponent,
    AddSkillComponent,
    AddExperienceComponent,
    AddProjectComponent,
    AddEducationComponent,
    SaveAllBtnComponent,
    ToasterComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    ProjectsCardComponent,
    UploadingSpinnerComponent,
    VideoComponent,
    ContactFormComponent,
    DownloadBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    StorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
