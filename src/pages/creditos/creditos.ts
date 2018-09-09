import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html',
})
export class CreditosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  voltar() {
    this.navCtrl.setRoot(MenuPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
  }

}
