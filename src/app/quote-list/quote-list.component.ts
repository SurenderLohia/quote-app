import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Quote } from './../quote';

// Animation: https://stackblitz.com/edit/angular-list-animations-hxtcno?file=app%2Fapp.component.ts

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];

  // logAnimation(_event) {
  //   console.log(_event)
  // }

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
