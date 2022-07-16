import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/general-services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-btn',
  templateUrl: './dark-mode-btn.component.html',
  styleUrls: ['./dark-mode-btn.component.css']
})
export class DarkModeBtnComponent implements OnInit {
  isDark:boolean;

  constructor(
    private darkMode:DarkModeService) {
      this.isDark = darkMode.getDarkMode();
     }

  ngOnInit(): void {
    if (this.isDark){
      this.toggleDarkClass();
    }
  }

  setDarkMode(){
    this.isDark = !this.isDark;
    this.darkMode.setDarkMode();
    this.toggleDarkClass();
  }

  toggleDarkClass(){
    document.querySelector(".dark-mode-btn")?.classList.toggle("dark");
  }

}
