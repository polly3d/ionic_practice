import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SvgTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-svg-test',
  templateUrl: 'svg-test.html'
})
export class SvgTest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SvgTest Page');
  }

}
