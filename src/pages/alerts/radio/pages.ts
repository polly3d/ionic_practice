import {AlertController, Alert} from "ionic-angular";
import {Component} from "@angular/core";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'pages.html',
})
export class RadioAlert {
    constructor(private alertCtrl: AlertController) {

    }

    doClick(): void {
        let alert: Alert = this.alertCtrl.create();
        alert.setTitle('请选择颜色');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red',
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                console.log('radio data: ',data);
            }
        });
        alert.present();
    }
}