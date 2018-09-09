import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
/*
  Generated class for the JogoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JogoProvider {
  esconder: boolean;
  title: string;
  bb: boolean;
  cc: boolean;
  constructor(public http: HttpClient,public navCtrl: NavController) {
    console.log('Hello JogoProvider Provider');
    this.esconder = true;
    this.bb = true;
    this.cc = true;
    this.title = 'Quiz de Harry Potter';
  }
  config() {
    this.bb = !this.bb;
    if (this.bb === false) {
      this.title = 'Configurações';
    } else if (this.bb === true) {
      this.title = 'Quiz de Harry Potter';
    }
  }
 creditos() {
   this.cc = !this.cc;
   if (this.cc === false) {
     this.title = 'Créditos';
   } else if (this.cc === true) {
     this.title = 'Quiz de Harry Potter';
   }
 }
}

