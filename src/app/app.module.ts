import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuApiProvider } from '../providers/menu-api/menu-api';
import {MenuPage} from '../pages/menu/menu';
import {HttpClientModule} from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';
import {LoginPage} from "../pages/login/login";
import { CurrencyPipe } from '@angular/common';

import { FirebaseProvider } from '../providers/firebase/firebase';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";

let config = {
  apiKey: "AIzaSyCCsdWt5E2-79LatdNWu77rKi2Bpe2cWOw",
  authDomain: "mtechmenu.firebaseapp.com",
  databaseURL: "https://mtechmenu.firebaseio.com",
  projectId: "mtechmenu",
  storageBucket: "mtechmenu.appspot.com",
  messagingSenderId: "382312556211"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuApiProvider,
    FirebaseProvider,
    UpperCasePipe,
    CurrencyPipe,
    UpperCasePipe
  ]
})
export class AppModule {}
