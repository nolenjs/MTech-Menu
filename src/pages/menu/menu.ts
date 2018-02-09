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

  hour = new Date().getHours();

  menuInfo: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuProvider: MenuApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

    if(this.hour >= 7  && this.hour < 11) {
      this.getBreakfast();
    }

    if(this.hour >=11  && this.hour < 20) {
      this.getLunchandDinner();
    }
    else {
      this.menuInfo = '';
    }
  }

  getBreakfast(){
    this.menuProvider.getBreakfastMenuData().subscribe((breakfastMenu: any)=>{
      this.menuInfo = breakfastMenu;

      console.log(this.menuInfo);
    });
  }
  getLunchandDinner(){
    this.menuProvider.getLunchMenuData().subscribe((lunchMenu: any)=>{
      this.menuInfo = lunchMenu;

      console.log(this.menuInfo);
    });
  }

}
