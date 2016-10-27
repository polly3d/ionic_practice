import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'pages.html',
})
export class PromptAlert {
    constructor(private alertCtrl: AlertController) {

    }
    doClick(): void {
        let alert = this.alertCtrl.create({
            title: '登陆提示',
            message: '请输入密码：',
            inputs: [
                {
                    name: 'password',
                    placeholder: '密码'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel click');
                    }
                },
                {
                    text: 'save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]

        });
        alert.present();
    }
}