/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SamplecomponentComponent } from './samplecomponent.component';

let component: SamplecomponentComponent;
let fixture: ComponentFixture<SamplecomponentComponent>;

describe('samplecomponent component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SamplecomponentComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SamplecomponentComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});