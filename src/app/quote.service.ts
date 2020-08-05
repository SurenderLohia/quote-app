import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Quote } from './quote';

import {Observable} from 'rxjs/Rx';

const quoteApiUrl = 'https://dev-quote.herokuapp.com/api/quotes';
const quoteApiLocalUrl = 'http://localhost:3000/api/quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes = [];
  constructor(
    private httpClient: HttpClient
  ) { 
    
  }

  setQuotes(quotes) {
    this.quotes = quotes;
  }

  addQuote(quote) {
    console.log('adding quote');
    if(quote.quote) {
      this.quotes.unshift(quote);
    }
  }

  addQuoteApiCall(quote): Observable<Quote> {
    return this.httpClient.post<Quote>(quoteApiUrl, quote)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(quoteApiUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
