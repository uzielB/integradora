import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombreTutor: string = '';
  area: string = '';
  nombreInstructor: string = '';
  horario: string = '';

  constructor() { }

  ngOnInit() {
  }

  registrar() {
    // Aquí puedes agregar la lógica para registrar los datos ingresados
    console.log("Nombre tutor:", this.nombreTutor);
    console.log("Área:", this.area);
    console.log("Nombre del instructor:", this.nombreInstructor);
    console.log("Horario:", this.horario);
  }

}
