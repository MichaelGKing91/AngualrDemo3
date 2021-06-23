import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-show-reddit',
    templateUrl: './show-reddit.component.html',
    styleUrls: ['./show-reddit.component.css']
})
/** show-reddit component*/
export class ShowRedditComponent {
  @Input() redditItem = null;
    /** show-reddit ctor */
    constructor() {

    }
}
