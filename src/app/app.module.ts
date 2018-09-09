import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuPage} from '../pages/menu/menu';
import { CreditosPage} from '../pages/creditos/creditos';
import { ConfiguracoesPage} from '../pages/configuracoes/configuracoes';
import { JogarPage} from '../pages/jogar/jogar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JogoProvider } from '../providers/jogo/jogo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    JogarPage,
    ConfiguracoesPage,
    CreditosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    JogarPage,
    ConfiguracoesPage,
    CreditosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
