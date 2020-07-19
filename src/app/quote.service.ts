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
  ) { }

  fetchQuotes() {
    return this.http.get('https://dev-quote.herokuapp.com/api/quotes');
  }

  getQuotes() {
    return this.quotes;
  }
}
