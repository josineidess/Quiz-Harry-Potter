import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Perguntas } from '../../app/classes/perguntas';
import { MenuPage} from '../menu/menu';
/**
 * Generated class for the JogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogar',
  templateUrl: 'jogar.html',
})
export class JogarPage {
  resultado: string;
  acertou: boolean;
  perguntas: string;
  errou: boolean;
  msg: string;
  result;
  respostas: string;
  pergunta1: Perguntas;
  pergunta2: Perguntas;
  pergunta3: Perguntas;
  nm: number;
  aleatorias: string[];
  a: string;
  b: string;
  c: string;
  d: string;
  m;
  t;
  i;
  pontos: number;
  sortear;
  numeros: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pontos = 0;
    this.nm = 0;
    this.msg = '';
    this.numeros = ['1', '2', '3', '4', '5', '6', '8', '10'];
    this.pergunta1 =  {
      id: 1,
      pergunta: 'Quantas horcruxes o Voldemort fez?',
      resposta: '7'
    };
    this.aleatorias = ['Belatrix', 'Gina', 'Luna', 'Lily'];
    this.sortear = this.aleatorias.forEach(tent => {
      console.log('tent');
    });
    this.pergunta2 = {
      id: 2,
      pergunta : 'Qual o nome da mãe do Harry?',
      resposta: 'Lilian'
    };
    this.pergunta3 = {
      id: 3,
      pergunta: 'Quantos Filhos a senhora Weasley teve?',
      resposta: '7'
    };
    this.perguntas = this.pergunta1.pergunta;
    this.respostas = this.pergunta1.resposta;
    this.acertou = true;
    this.errou = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogarPage');
  }
  acertar() {
    this.acertou = !this.acertou;
    this.resultado = 'Parabéns você acertou!';
    this.msg = 'Parabéns você acertou!';
    this.nm += 1;
    this.pontos += 10;
  }
  errar() {
    this.errou = !this.errou;
    this.resultado = 'Que pena você errou...';
    this.msg = 'Que pena você errou...';
  }
  proxima() {
    if (this.nm === 1) {
    this.perguntas = this.pergunta2.pergunta;
    this.respostas = this.pergunta2.resposta;
    this.msg = '';
    this.sortearRespostas(this.aleatorias);
  } else if (this.nm === 2) {
    this.perguntas = this.pergunta3.pergunta;
    this.respostas = this.pergunta3.resposta;
    this.sortearNumeros(this.numeros);
  }
  this.msg = '';
}
  sortearRespostas(array) {
    this.m = array.lenght;
    while (this.m) {
    this.i = Math.floor(Math.random() * this.m--);
    this.t = array[this.m];
    array[this.m] = array[this.i];
    array[this.i] = this.t;
    }
    this.a = array[0];
    this.b = this.pergunta2.resposta;
    this.c = array[1];
    this.d = array[2];

  }
  voltar() {
    this.navCtrl.setRoot(MenuPage)
  }

  sortearNumeros(array) {
    this.m = array.lenght;
    while (this.m) {
    this.i = Math.floor(Math.random() * this.m--);
    this.t = array[this.m];
    array[this.m] = array[this.i];
    array[this.i] = this.t;
    }
    this.a = this.pergunta1.resposta;
    this.b = array[0];
    this.c = array[1];
    this.d = array[2];

  }

}
