import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
   declarations: [
      AppComponent,
      QuoteListComponent,
      AddQuoteComponent,
      LoaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
