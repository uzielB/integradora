import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infoc',
  templateUrl: './infoc.page.html',
  styleUrls: ['./infoc.page.scss'],
})
export class InfocPage implements OnInit {

  imagenSeleccionada: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.imagenSeleccionada = params['imagen'];
    });
  }

  inscribir(){
    this.router.navigate(['/inscribirse']);
  }

}


