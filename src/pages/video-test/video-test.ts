import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the VideoTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-video-test',
  templateUrl: 'video-test.html'
})
export class VideoTest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VideoTest Page');
  }

}
