import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() titulo!: string;

  constructor(private menu: MenuController, private router: Router) {}

  toggleMenu() {
    this.menu.toggle('menuId');
  }

  datos(){
    this.router.navigate(['usuario']);
  }

  ngOnInit() {}

}
