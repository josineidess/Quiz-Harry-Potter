import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { CreditosPage } from '../creditos/creditos';
import { JogarPage } from '../jogar/jogar';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  play: boolean;
  menu: boolean;
  config: boolean;
  credit: boolean;
  song: {
    id: number,
    title: string,
    artist: string;
    url: string
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.play = true;
  this.menu = false;
  this.config = true;
  this.credit = true;
  this.song = {
    id: 1,
    title: 'harry potter',
    artist: 'wb',
    url: '../../assents/musicas/tema.mp3'
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  jogar() {
    this.navCtrl.push(JogarPage)
  }
  configurar() {
    this.navCtrl.push(ConfiguracoesPage);
  }
  creditos() {
    this.navCtrl.push(CreditosPage)
  }
}
