import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  theTasks: Todo[] = [];
  starwars = null;
  dnd = null;
  http: HttpClient = null;

  constructor(http: HttpClient) {
    this.http = http;
    http.get<Todo[]>('/todo/test2').subscribe(result => {
      console.log(result);
      this.theTasks = result;
    }, error => {
      console.log(error);
    });
  }

  loadSWData() {
    //alert('Load SW Data'); Add this as a quick test to make sure we're calling the right function
    this.http.get<any>('https://swapi.dev/api/films/1/').subscribe(result => {
      console.log(result);
      this.starwars = result;
      //alert(result.title);
      // this.thetasks = result; Get rid of this line
    }, error => {
      console.log(error);
    });
  }

  loadDnDData() {
    this.http.get<any>('https://www.dnd5eapi.co/api/classes/fighter').subscribe(result => {
      console.log(result);
      this.dnd = result;
      console.log(this.dnd.proficiencies);
      //alert(result.title);
      // this.thetasks = result; Get rid of this line
    }, error => {
      console.log(error);
    });
  }
}
