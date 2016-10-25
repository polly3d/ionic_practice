import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {BasicPage} from "../pages/action-sheets/basic/pages";
/**
 * Created by Administrator on 2016/10/25.
 */


@NgModule({
    bootstrap: [ IonicApp ],
    declarations: [
        MyApp,
        BasicPage,
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    entryComponents: [
        BasicPage,
    ]
})
export class AppModule {

}