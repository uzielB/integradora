import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagenes = [
    { url: 'URL_IMAGEN_1' },
    { url: 'URL_IMAGEN_2' },
    // Agrega más imágenes según sea necesario
  ];

  carouselOptions = {
    slidesPerView: 'auto',
    // Otras opciones de configuración aquí
  };

  constructor() { }

}

