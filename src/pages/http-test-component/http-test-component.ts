import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleService} from "../../providers/people-service";

/*
  Generated class for the HttpTestComponent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-http-test-component',
    templateUrl: 'http-test-component.html',
    providers: [PeopleService],
})
export class HttpTestComponent {

    people: any;

    constructor(private peopleService: PeopleService) {
        this.loadPeople();
    }

    loadPeople() {
        console.log('load people');
        this.peopleService.load()
            .then(data => {
                console.log(data);
                this.people = data;
            });
    }

}
