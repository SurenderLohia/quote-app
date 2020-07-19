import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  addQuoteForm;
  constructor(
    private quoteService: QuoteService,
    private formBuilder: FormBuilder,
  ) { 
    
  }

  ngOnInit() {
    this.addQuoteForm = this.formBuilder.group({
      name: '',
      quote: ''
    });
  }

  onSubmit(newQuote) {
    this.addQuoteForm.reset();
    this.quoteService.addQuoteApiCall(newQuote)
      .subscribe(quote => {
        console.log('coming here');
        this.quoteService.addQuote(quote);
      });
  }
}
