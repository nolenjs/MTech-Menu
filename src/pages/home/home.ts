import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotToHome(){
    this.navCtrl.push(MenuPage);
  }
  gotToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
