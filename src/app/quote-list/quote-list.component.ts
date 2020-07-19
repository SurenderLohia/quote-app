import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes;
  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.quotes = this.quoteService.fetchQuotes();
  }

}
