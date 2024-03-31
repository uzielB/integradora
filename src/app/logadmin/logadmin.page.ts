import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.page.html',
  styleUrls: ['./logadmin.page.scss'],
})
export class LogadminPage implements OnInit {
  nombreTutor: string = '';
  contraseña: string = '';
  constructor(private Router: Router) { }



  ngOnInit() {
  }
  registrar() {
    // Aquí puedes agregar la lógica para registrar los datos ingresados
    console.log("Nombre tutor:", this.nombreTutor);
    console.log("Contraseña:", this.contraseña);
  }

  ingresar(){
    this.Router.navigate(['/tutoadmin']);
  }

}
