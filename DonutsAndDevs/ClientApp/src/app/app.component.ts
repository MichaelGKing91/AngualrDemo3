import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  allDonuts = null;
  http: HttpClient = null;

  constructor(myhttp: HttpClient) {
    this.http = myhttp;
  }

  loadAllDonuts() {
    this.http.get<any>('https://grandcircusco.github.io/demo-apis/donuts.json').subscribe(result => {
      console.log(result);
      this.allDonuts = result;
    }, error => {
      console.log(error);
    });
  }

  // Not sure how to do this
  loadADonut() {
    this.http.get<any>('https://grandcircusco.github.io/demo-apis/donuts/INSERT_ID_HERE.json').subscribe(result => {
      console.log(result);
      this.allDonuts = result;
    }, error => {
      console.log(error);
    });
  }

  testFunc() {
    // Add code to initialize one doughnut
    alert("It works!")
  }
}

