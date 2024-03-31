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
    this.Router.navigate(['/logadmin']);
  }

  redirectToUser() {
    this.Router.navigate(['/logusuario']); 
  }

  ngOnInit() {
  }

}
