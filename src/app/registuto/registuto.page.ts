import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registuto',
  templateUrl: './registuto.page.html',
  styleUrls: ['./registuto.page.scss'],
})
export class RegistutoPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }


  async crear(){

    const alert = await this.alertCtrl.create({
      header: 'Mi primer alert',
      backdropDismiss: false,
      message: 'Aaaaaaaaaaaaaaaaaaaa',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm'
        },
        {
          text: 'Cancelar',
          role: 'destructive'
        },
      ]
    });

    await alert.present();
    this.router.navigate(['tutoadmin']);
  }


  ngOnInit() {
  }

}
