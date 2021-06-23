import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  reddit = null;
  http: HttpClient = null;

  constructor(theHTTP: HttpClient) {
    this.http = theHTTP;
  }

  loadReddit() {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(result => {
      console.log(result);
      this.reddit = result;
    }, error => {
      console.log(error);
    });
  }
}
