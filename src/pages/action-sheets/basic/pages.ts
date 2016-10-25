import {Component} from "@angular/core";
import {Platform, ActionSheetController} from "ionic-angular";
/**
 * Created by Administrator on 2016/10/25.
 */

@Component({
    templateUrl: 'basic.html'
})
export class BasicPage {
    constructor(
        private platform: Platform,
        private actionsheetCtrl: ActionSheetController
    ) {

    }
    openMenu(): void {
        let actionSheet = this.actionsheetCtrl.create({
            title: '标题',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
}