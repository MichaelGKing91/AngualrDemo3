/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MycompComponent } from './mycomp.component';

let component: MycompComponent;
let fixture: ComponentFixture<MycompComponent>;

describe('mycomp component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MycompComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MycompComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});