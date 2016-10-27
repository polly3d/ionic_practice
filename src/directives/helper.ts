import {NavItem} from "../core/nav-item";
import * as ActionSheets from "../pages/action-sheets/action-sheets";
import * as Alerts from "../pages/alerts/alerts";
import {BadgePage} from "../pages/badges/badges";
import * as Buttons from "../pages/buttons/buttons";
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
    ]
}
