/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { Comp2Component } from './comp2.component';

let component: Comp2Component;
let fixture: ComponentFixture<Comp2Component>;

describe('comp2 component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Comp2Component ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(Comp2Component);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});