import {NavItem} from "../core/nav-item";
import * as ActionSheets from "../pages/action-sheets/action-sheets";
import * as Alerts from "../pages/alerts/alerts";
import {BadgePage} from "../pages/badges/badges";
import * as Buttons from "../pages/buttons/buttons";
import {InAppBrowserComponent} from "../pages/in-app-browser/in-app-borwser-component";
import {HttpTestComponent} from "../pages/http-test-component/http-test-component";
import {PromiseTest} from "../pages/promise-test/promise-test";
import {IframeTest} from "../pages/iframe-test/iframe-test";
import {VideoTest} from "../pages/video-test/video-test";
/**
 * Created by sci-change on 2016/10/26.
 */

export function getAllNavItems(): NavItem[] {
    return [
        {name: 'Action Sheets', component: ActionSheets.BasicPage},
        {name: 'Basic Alerts', component: Alerts.BasicPage},
        {name: 'PromptAlert', component: Alerts.PromptAlert},
        {name: 'RadioAlert', component: Alerts.RadioAlert},
        {name: 'CheckBoxAlert', component: Alerts.CheckBoxAlert},
        {name: 'Badges', component: BadgePage},
        {name: 'BaseButton', component: Buttons.BaseButton},
        {name: 'ButtonInComponents', component: Buttons.ButtonInComponent},
        {name: 'InAppBrowser', component: InAppBrowserComponent},
        {name: 'HttpTestComponent', component: HttpTestComponent},
        {name: 'PromiseTest', component: PromiseTest},
        {name: 'IframeTest', component: IframeTest},
        {name: 'VideoTest', component: VideoTest},
    ]
}
