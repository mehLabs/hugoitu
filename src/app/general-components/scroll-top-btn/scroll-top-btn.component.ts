import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.css']
})
export class ScrollTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var button = document.querySelector('#scroll-top-btn');
    var altura = window.innerHeight;

    window.addEventListener('scroll', function (e) {
      
      let distancia = window.pageYOffset;

      
      if (distancia >= altura){
          button?.classList.add('aparece');
      }else{
          button?.classList.remove('aparece');
      }
      
    });
  }

}
