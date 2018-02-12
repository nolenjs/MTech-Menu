import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  // template: `<ion-nav [root]="rootPage"></ion-nav>`
  // template: `<!--<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>-->`

})



export class HomePage {
    // params: Object;
    // pushPage: any;
  constructor(public navCtrl: NavController,  ) {
// this.pushPage = LoginPage;
//     this.params = { id: 42 };
  }

  gotToHome(){
    this.navCtrl.push(MenuPage);
  }
  gotToLogin(){
    this.navCtrl.push(LoginPage);
  }
  openPage() {

  }


  }


