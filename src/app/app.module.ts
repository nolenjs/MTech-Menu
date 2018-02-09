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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    CurrencyPipe,
    UpperCasePipe
  ]
})
export class AppModule {}
