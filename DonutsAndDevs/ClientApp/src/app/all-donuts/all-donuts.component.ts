import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-all-donuts',
    templateUrl: './all-donuts.component.html',
    styleUrls: ['./all-donuts.component.css']
})
/** AllDonuts component*/
export class AllDonutsComponent {
  @Input() aDount = null;

    /** AllDonuts ctor */
    constructor() {

    }
}
