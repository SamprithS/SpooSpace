import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService, QuoteDTO } from '../../services/quote.service';
import { StarFieldComponent } from '../../components/star-field/star-field.component';
import { QuoteCardComponent } from '../../components/quote-card/quote-card.component';

const MOOD_LABELS: Record<string, string> = {
  COMFORT: 'Comfort',
  CONFIDENCE: 'Confidence',
  SOFT: 'Soft',
  HAPPY: 'Happy',
  INSPIRATION: 'Inspiration',
};

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [CommonModule, StarFieldComponent, QuoteCardComponent],
  templateUrl: './quotes-page.page.html',
  styleUrls: ['./quotes-page.page.scss']
})
export class QuotesPageComponent implements OnInit {
  mood = '';
  moodLabel = '';
  quotes: QuoteDTO[] = [];
  currentIndex = 0;
  isLoading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.mood = this.route.snapshot.paramMap.get('mood') || 'COMFORT';
    this.moodLabel = MOOD_LABELS[this.mood] || this.mood;
    // Pre-fetch a few quotes to have a stack ready
    this.fetchQuote();
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.quoteService.getRandomQuote(this.mood).subscribe({
      next: (q) => {
        this.quotes.push(q);
      },
      error: () => {
        // If backend isn't up, show a placeholder
        if (this.quotes.length === 0) {
          this.error = 'Could not reach the server. Is Spring Boot running?';
        }
      }
    });
  }

  get visibleQuotes(): QuoteDTO[] {
    return this.quotes.slice(this.currentIndex, this.currentIndex + 2);
  }

  onSwipe(): void {
    this.currentIndex++;
    // Pre-fetch next quote from backend to keep the stack fed
    this.fetchQuote();

    // If we're running low, cycle back as well
    if (this.currentIndex >= this.quotes.length - 1) {
      this.currentIndex = 0;
      this.quotes = this.shuffle([...this.quotes]);
    }
  }

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}