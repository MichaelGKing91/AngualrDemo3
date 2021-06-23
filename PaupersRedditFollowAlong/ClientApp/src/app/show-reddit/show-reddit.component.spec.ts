/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShowRedditComponent } from './show-reddit.component';

let component: ShowRedditComponent;
let fixture: ComponentFixture<ShowRedditComponent>;

describe('show-reddit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShowRedditComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShowRedditComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});