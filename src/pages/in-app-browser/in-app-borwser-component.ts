import {Component} from "@angular/core";
import {InAppBrowser} from "ionic-native";

/**
 * Created by Administrator on 2016/10/30.
 */


@Component({
    template: `
    <ion-header>
        <ion-navbar>
            <ion-title>InAppBrowser Component</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content padding>
        <button ion-button block (click)="toBaidu('_self')">访问百度(_self）</button> 
        <button ion-button block (click)="toBaidu('_blank')">访问百度(_blank)</button> 
        <button ion-button block (click)="toBaidu('_system')">访问百度(_system)</button> 
    </ion-content>
    `
})
export class InAppBrowserComponent {

    toBaidu(type: string): void {
        //需要在真机或模拟器中，才有效果
        let browser = new InAppBrowser('https://www.baidu.com',type);
        console.log(browser);
    }

}