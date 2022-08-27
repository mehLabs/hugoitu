import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeService } from 'src/app/portfolio-services/resume.service';

@Component({
  selector: 'app-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrls: ['./resume-button.component.css']
})
export class ResumeButtonComponent implements OnInit {

  @Input() spanish:any;
  @Output() detallado: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  checked = false;
  screenWidth:number = 0;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
  }

  check(){
    this.resumeService.toggleResumir()
  }

}
