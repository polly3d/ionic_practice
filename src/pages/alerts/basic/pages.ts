import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'pages.html'
})
export class BasicPage {

    constructor(private alertCtrl: AlertController) { }

    basicAlertClick(): void {
        let alert = this.alertCtrl.create({
            title: '请确认',
            message: '这里面填写需要确认的信息',
            buttons: ['确定']
        });
        alert.present();
    }
}