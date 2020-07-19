import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

import { Quote } from './../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.quoteService.getAllQuotes().subscribe((data: Quote[])=>{
      console.log(data);
      this.quotes = data;
      this.quoteService.setQuotes(data);
    })
  }

}
