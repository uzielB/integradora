import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-a',
  templateUrl: './registro-a.page.html',
  styleUrls: ['./registro-a.page.scss'],
})
export class RegistroAPage implements OnInit {

  constructor(private Router: Router) { }
  crear() {
    this.Router.navigate(['/logusuario']);
  }
  ngOnInit() {
  }

}
