import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

  constructor(public http: Http) {
    console.log('Hello PeopleService Provider');
  }

  load() {
      return new Promiss.resolve(resole => {
          this.http.get('path/to/data.json')
              .map(res => res.json())
              .subscribe(data => {
                  resole(data);
              })
      })
  }

}
