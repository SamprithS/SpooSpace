import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from './services/quote/quote';
import { Quote } from './models/quote/quote';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h1 class="text-2xl font-bold text-purple-700">SpooSpace Connection Test</h1>
      <div *ngIf="testQuote" class="mt-4 p-4 border rounded shadow-lg bg-white">
        <p class="italic">"{{ testQuote.quoteText }}"</p>
        <p class="font-bold text-right">- {{ testQuote.memberName }} ({{ testQuote.groupName }})</p>
      </div>
    </div>
  `
})

export class AppComponent implements OnInit {
  testQuote?: Quote;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    // Testing the COMFORT mood we seeded yesterday
    this.quoteService.getRandomQuoteByMood('COMFORT').subscribe({
      next: (data) => {
        this.testQuote = data;
        console.log('Handshake Successful:', data);
      },
      error: (err) => {
        console.error('Handshake Failed. Check CORS or Backend:', err);
      }
    });
  }
}