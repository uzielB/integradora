import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagenes: string[] = [
    'assets/d.jpg', // Ruta de la imagen para Deportivas
    'assets/c.jpg'  // Ruta de la imagen para Culturales
  ];

  constructor() {}


}
