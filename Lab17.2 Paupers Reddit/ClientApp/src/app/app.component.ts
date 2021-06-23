import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  http: HttpClient = null;
  redditdata = null;

  constructor(myhttp: HttpClient) {
    this.http = myhttp;
    myhttp.get<any>('https://www.reddit.com/r/aww/.json').subscribe(result => {
      console.log(result);
      this.redditdata = result;
      console.log(this.redditdata.data.children[0].data.title);
    }, error => {
      console.log(error);
    });
  }
}
