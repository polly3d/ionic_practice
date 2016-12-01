import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {IonicApp, IonicModule} from "ionic-angular";
import * as ActionSheets from "../pages/action-sheets/action-sheets";
import * as Alerts from "../pages/alerts/alerts";
import {BadgePage} from "../pages/badges/badges";
import * as Buttons from "../pages/buttons/buttons";
import {InAppBrowserComponent} from "../pages/in-app-browser/in-app-borwser-component";
import {HttpTestComponent} from "../pages/http-test-component/http-test-component";
import {PromiseTest} from "../pages/promise-test/promise-test";
import {IframeTest} from "../pages/iframe-test/iframe-test";
import {VideoTest} from "../pages/video-test/video-test";
import {SvgTest} from "../pages/svg-test/svg-test";
/**
 * Created by sci-change on 2016/10/26.
 */

@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [ IonicApp ],
    declarations: [
        AppComponent,
        ActionSheets.BasicPage,
        Alerts.BasicPage,
        Alerts.PromptAlert,
        Alerts.RadioAlert,
        Alerts.CheckBoxAlert,
        BadgePage,
        Buttons.BaseButton,
        Buttons.ButtonInComponent,
        InAppBrowserComponent,
        HttpTestComponent,
        PromiseTest,
        IframeTest,
        VideoTest,
        SvgTest,
    ],
    entryComponents: [
        AppComponent,
        ActionSheets.BasicPage,
        Alerts.BasicPage,
        Alerts.PromptAlert,
        Alerts.RadioAlert,
        Alerts.CheckBoxAlert,
        BadgePage,
        Buttons.BaseButton,
        Buttons.ButtonInComponent,
        InAppBrowserComponent,
        HttpTestComponent,
        PromiseTest,
        IframeTest,
        VideoTest,
        SvgTest,
    ]
})
export class AppModule {

}