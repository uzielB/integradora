import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Router: Router) { }

  redirectToAdmin() {
    this.Router.navigate(['/logadmin']); // Reemplaza '/logadmin' con la ruta real a tu página logadmin
  }

  redirectToUser() {
    this.Router.navigate(['/logusuario']); // Reemplaza '/logusuario' con la ruta real a tu página logusuario
  }

  ngOnInit() {
  }

}
