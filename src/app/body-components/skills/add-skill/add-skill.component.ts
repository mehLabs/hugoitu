import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  
  @Input() categorias:any[]= [];
  @Output() newSkill:EventEmitter<any> = new EventEmitter();

  categoria = new FormControl('');
  nombre = new FormControl('');
  porcentaje = new FormControl('', [
    Validators.max(100)
  ]);

  constructor() { }


  ngOnInit(): void {
  }

  emitSkill(){
    let skill = {
      "categoria":this.categoria.value,
      "nombre":this.nombre.value,
      "porcentaje":this.porcentaje.value,
      "id_tecnologia":null
    }
    this.newSkill.emit(skill);
  }

}
