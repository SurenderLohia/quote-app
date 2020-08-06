/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuoteListComponent } from './quote-list.component';
import { QuoteService } from '../quote.service';

describe('QuoteListComponent', () => {
  let component: QuoteListComponent;
  let fixture: ComponentFixture<QuoteListComponent>;

  const quotes = [
    {
      "_id": "5f2a5a6caac6c7360cc87863",
      "quote": "Strikes and gutters, ups and downs...",
      "author": "Dude",
      "lastModified": "2020-08-05T07:06:20.108Z"
    }
  ];

  // Create a fake TwainService object with a `getQuote()` spy
  const quoteService = jasmine.createSpyObj('QuoteService', ['getAllQuotes', 'setQuotes']);

  // Make the spy return a synchronous Observable with the test data
  quoteService.getAllQuotes.and.returnValue( of(quotes) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ QuoteListComponent ],
      providers: [ { provide: QuoteService, useValue: quoteService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component ', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllQuotes', () => {
    it('should render quote element', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.innerHTML).toContain('Strikes and gutters, ups and downs...');
    });
  });
});
