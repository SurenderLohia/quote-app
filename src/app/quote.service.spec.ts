/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';

import { QuoteService } from './quote.service';
import { Quote } from './quote';

describe('Service: Quote', () => {
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let service: QuoteService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new QuoteService(httpClientSpy as any);
  });

  it('should create quote service', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllQuotes', () => {
    it('should return all quotes', () => {
      const quotesResponse: Quote[] = [
        {
          "_id": "5f2a5a6caac6c7360cc87863",
          "quote": "Strikes and gutters, ups and downs...",
          "author": "Dude",
          "lastModified": "2020-08-05T07:06:20.108Z"
        },
        {
          "_id": "5f2a5a65aac6c7360cc87862",
          "quote": "Life is Difficult...",
          "author": "Dude",
          "lastModified": "2020-08-05T07:06:13.688Z"
        },
      ];

      httpClientSpy.get.and.returnValue(of(quotesResponse));

      let response;
      service.getAllQuotes().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(quotesResponse)
    });
  });

  describe('addQuoteApiCall', () => {
    it('should return a added quote', () => {
      const quote = {
        "quote": "Strikes and gutters, ups and downs...",
        "author": "Dude",
      }
      const quoteResonse = {
        "_id": "5f2a5a6caac6c7360cc87863",
        "quote": "Strikes and gutters, ups and downs...",
        "author": "Dude",
        "lastModified": "2020-08-05T07:06:20.108Z"
      }

      httpClientSpy.post.and.returnValue(of(quoteResonse));
      let response;

      service.addQuoteApiCall(quote).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(quoteResonse);
    });
  });
  
  describe('addQuote', () => {
    it('should add new quote', () => {
      expect(service.quotes.length).toEqual(0);
      const newQuote = {
        "_id": "5f2a5a6caac6c7360cc87863",
        "quote": "Strikes and gutters, ups and downs...",
        "author": "Dude",
        "lastModified": "2020-08-05T07:06:20.108Z"
      }
      service.addQuote(newQuote);
      expect(service.quotes.length).toEqual(1);
      expect(service.quotes[0]).toEqual(newQuote);
    });
  });
});
