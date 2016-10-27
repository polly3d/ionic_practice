import {Component} from "@angular/core";
import {Platform, ActionSheetController} from "ionic-angular";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'pages.html'
})
export class BasicPage {

    constructor(
        private platform: Platform,
        private actionsheetCtrl: ActionSheetController
    ) { }

    openActionSheets(): void {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Action Sheets',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },

            ]
        });
        actionSheet.present();
    }
}