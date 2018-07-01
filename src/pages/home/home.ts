import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  logIn() {
    if(this.username == "root" && this.password == "toor") {
      this.navCtrl.push(ListPage);
    }else{
      let alert = this.alertCtrl.create({
        title: 'Wrong Id or Password',
        subTitle: 'root/toor',
        buttons: ['Compris']
      });
      alert.present();
    }
  }

}
