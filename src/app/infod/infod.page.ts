import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infod',
  templateUrl: './infod.page.html',
  styleUrls: ['./infod.page.scss'],
})
export class InfodPage implements OnInit {

  imagenSeleccionada: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { } 

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.imagenSeleccionada = params['imagen'];
    });
  }

}
