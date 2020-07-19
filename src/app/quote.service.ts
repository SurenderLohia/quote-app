import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://dev-quote.herokuapp.com/api/quotes';
const localUrl = 'https:/local/api/quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes = [];
  constructor(
    private http: HttpClient
  ) { 
    this.quotes = this.quotes.concat(this.http.get('https://dev-quote.herokuapp.com/api/quotes'));
  }

  fetchQuotes() {
    return this.http.get('https://dev-quote.herokuapp.com/api/quotes');
  }

  getQuotes() {
    return this.quotes;
  }

  addQuoteApiCall(newQuote) {
    return this.http.post(url, newQuote);
  }

  addQuote(quote) {
    this.quotes.push(quote);
  }
}
