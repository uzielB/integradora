import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutoadmin',
  templateUrl: './tutoadmin.page.html',
  styleUrls: ['./tutoadmin.page.scss'],
})
export class TutoadminPage implements OnInit {

  // Definición del arreglo para almacenar los datos
  public items: Array<{ title: string;  image: string }> = [];

  constructor() { }

  ngOnInit() {
    // Agregar algunos datos de ejemplo al arreglo
    this.items.push({
      title: 'Futbol',
      image: 'assets/c.jpg' // Ejemplo de imagen
    });

    this.items.push({
      title: 'Basquetball',
      image: 'assets/c.jpg' // Otro ejemplo de imagen
    });

    this.items.push({
      title: 'Boleivol',
      image: 'assets/c.jpg' // Otro ejemplo de imagen
    });


  }

}
