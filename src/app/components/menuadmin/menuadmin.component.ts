import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.scss'],
})
export class MenuadminComponent  implements OnInit {
  @Input() titulo!: string;

  constructor(private menu: MenuController) { }

  toggleMenu() {
    this.menu.toggle('menu');
  }

  ngOnInit() {}

}
