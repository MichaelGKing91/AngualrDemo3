import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mycomp',
    templateUrl: './mycomp.component.html',
    styleUrls: ['./mycomp.component.css']
})
/** mycomp component*/
export class MycompComponent {
   @Input() thename: string = "";
    constructor() {

    }
}
