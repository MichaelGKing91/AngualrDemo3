/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShowTodoComponent } from './show-todo.component';

let component: ShowTodoComponent;
let fixture: ComponentFixture<ShowTodoComponent>;

describe('show-todo component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShowTodoComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShowTodoComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});