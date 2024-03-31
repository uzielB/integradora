import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  constructor(private toastController: ToastController, private Router: Router) { }

  async toastPosition(msn: string, position:'top'|"bottom"|"middle"){
    this.Router.navigate(['inscribirse']);
    const toast=this.toastController.create({
      header:msn,
      position ,
      duration: 1000,
      color: 'success',
      icon:'balloon',
      buttons:[
        {
          text:'Aceptar',
          handler(){
            console.log('Aceptadooo!')
          }
        }
      ]

    });
    (await toast).present();
  }

  ngOnInit() {
  }

}
