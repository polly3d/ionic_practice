import {Component, OnInit} from "@angular/core";
import * as helper from "../directives/helpers";
import {BasicPage} from "../pages/action-sheets/basic/pages";
/**
 * Created by Administrator on 2016/10/25.
 */

@Component({
    templateUrl: 'app.html',
})
export class MyApp implements OnInit{

    navItems: Array<{name:string, component:any}>;
    rootPage: any;

    constructor(){
        this.rootPage = BasicPage;
    }

    ngOnInit(): void {
        this.navItems = helper.getNavItems();
    }
}