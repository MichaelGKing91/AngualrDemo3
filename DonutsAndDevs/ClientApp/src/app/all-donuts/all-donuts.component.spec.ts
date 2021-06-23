/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AllDonutsComponent } from './all-donuts.component';

let component: AllDonutsComponent;
let fixture: ComponentFixture<AllDonutsComponent>;

describe('AllDonuts component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AllDonutsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AllDonutsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});