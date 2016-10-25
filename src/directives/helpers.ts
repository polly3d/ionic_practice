import {BasicPage} from "../pages/action-sheets/basic/pages";
/**
 * Created by Administrator on 2016/10/25.
 */


export function getNavItems(): Array<{name: string, component: any}> {
    return [
        {name: 'Action Sheets', component: BasicPage},
        {name: '组件2', component: 'dd'},
        {name: '组件3', component: 'dd'},
    ];
}