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

    videoURL: any = [
        {name:'香港卫视',url:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'},
        {name:'凤凰中文HD',url:'http://218.203.106.12:5580/ysten-business/live/fhchinese/yst.m3u8'},
        {name:'凤凰资讯',url:'http://119.167.138.7/live/zixun.m3u8'},
        {name:'TV8',url:'http://202.102.79.114:554/live/tvb8.stream/playlist.m3u8'},
        {name:'苹果官方m3u8',url:'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8'},
    ];

    currentURL: string;


    ionViewDidLoad() {
        this.currentURL = this.videoURL[0].url;
    }

    playVideo(url: string)
    {
        this.currentURL = url;
    }

}
