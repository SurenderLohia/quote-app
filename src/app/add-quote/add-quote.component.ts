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
    this.addQuoteForm = this.formBuilder.group({
      name: '',
      quote: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(newQuote) {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    this.addQuoteForm.reset();
    this.quoteService.addQuoteApiCall(newQuote)
      .subscribe(quote => {
        console.log('coming here');
        this.quoteService.addQuote(quote);
        
        //this.quote = this.quoteService.getQuotes();
      });

    //console.warn('Your order has been submitted', newQuote);
  }

}
