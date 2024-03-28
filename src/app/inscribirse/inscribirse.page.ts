import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
})
export class InscribirsePage {

  constructor(private alertCtrl: AlertController) { }


async enviar(){
  const alert = await this.alertCtrl.create({
    message:'Registro Exitoso',
    buttons:['OK']
  });
  await alert.present();
}

ngOnInit() {
}


}
