import {Component} from "@angular/core";
import {AlertController, Alert} from "ionic-angular";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'pages.html'
})
export class CheckBoxAlert {
    constructor(private alertCtrl: AlertController) { }

    doClick(): void {
        let alert: Alert = this.alertCtrl.create();
        alert.setTitle('CheckBox Alert');
        alert.addInput({
            type: 'checkbox',
            label: 'Blue',
            value: 'blue'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Red',
            value: 'red'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Save',
            handler: data => {
                console.log(data);
            }
        });

        alert.present();
    }
}
