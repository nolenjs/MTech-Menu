import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  password: string;
  password2: string;
  htmlToAdd: string;

  constructor(public navCtrl: NavController,
              private firebase: AngularFireAuth) {

  }

  signUp(){
    if (this.password === this.password2){
      console.log("Passords match, signing up");
      this.firebase.auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        console.log(this.email);
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    }
  }

  signIn(){
    this.firebase.auth.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  }

  addPasswordInput(){
    this.htmlToAdd = '<ion-item>' +
      '        <ion-label floating>Confirm Password</ion-label>' +
      '        <ion-input (keyUp)="password2" type="text"></ion-input>' +
      '      </ion-item>';
  }

}
