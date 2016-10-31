import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HttpTestComponent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-http-test-component',
  templateUrl: 'http-test-component.html'
})
export class HttpTestComponent {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HttpTestComponent Page');
  }

}
