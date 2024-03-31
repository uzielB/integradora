import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logusuario',
  templateUrl: './logusuario.page.html',
  styleUrls: ['./logusuario.page.scss'],
})
export class LogusuarioPage implements OnInit {

  constructor(private Router:Router) { }

  crearCuenta() {
    this.Router.navigate(['/registro-a']);
  }

  ingresar(){
    this.Router.navigate(['home']);
  }

  ngOnInit() {
  }

}
