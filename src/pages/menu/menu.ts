import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuApiProvider} from '../../providers/menu-api/menu-api';

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

  breakfast: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

    this.getBreakfast();
  }

  getBreakfast(){
    this.menuProvider.getBreakfastMenuData().subscribe((breakfastMenu: any)=>{
      this.breakfast = breakfastMenu;

      console.log(this.breakfast);
    });
  }

}
