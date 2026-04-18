import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService, QuoteDTO } from '../../services/quote.service';
import { StarFieldComponent } from '../../components/star-field/star-field.component';
import { QuoteCardComponent } from '../../components/quote-card/quote-card.component';
import { QuoteSkeletonComponent } from '../../components/quote-skeleton/quote-skeleton.component';

const MOOD_LABELS: Record<string, string> = {
  COMFORT:     'Comfort',
  CONFIDENCE:  'Confidence',
  SOFT:        'Soft',
  HAPPY:       'Happy',
  INSPIRATION: 'Inspiration',
};

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [CommonModule, StarFieldComponent, QuoteCardComponent, QuoteSkeletonComponent],
  template: `
    <div class="page">
      <app-star-field />

      <header class="header">
        <button class="back-btn" (click)="goBack()" aria-label="Go back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 class="mood-title">{{ moodLabel }}</h2>
        <div class="spacer"></div>
      </header>

      <main class="card-area">
        <div class="card-stack">
          <app-quote-skeleton *ngIf="isLoading" />
          <div *ngIf="error && !isLoading" class="center-state error-state">
            <p>Could not reach the server.</p>
            <p class="hint">Is Spring Boot running on port 8080?</p>
          </div>
          <ng-container *ngIf="!isLoading && visibleQuotes.length > 0">
            <app-quote-card
              *ngFor="let quote of visibleQuotes.slice().reverse(); let i = index"
              [quote]="quote"
              [isTop]="i === visibleQuotes.length - 1"
              (swiped)="onSwipe()"
            />
          </ng-container>
        </div>
      </main>

      <div class="swipe-hint" *ngIf="!isLoading && visibleQuotes.length > 0">
        <p>{{ currentIndex + 1 }} / {{ queue.length }} &nbsp;·&nbsp; swipe to see next quote ✦</p>
      </div>
    </div>
  `,
  styles: [`
    .page {
      position: relative;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      background: var(--color-bg-gradient, var(--color-bg));
      overflow: hidden;
      transition: background 0.5s ease;
    }
    .header {
      position: relative;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 48px 24px 16px;
    }
    .back-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-muted);
      padding: 4px;
      display: flex;
      align-items: center;
      transition: color 0.2s ease;
    }
    .back-btn:hover { color: var(--color-gold); }
    .mood-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: var(--color-fg);
      margin: 0;
      transition: color 0.3s ease;
    }
    .spacer { width: 28px; }
    .card-area {
      position: relative;
      z-index: 10;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 24px 96px;
    }
    .card-stack {
      position: relative;
      width: 100%;
      max-width: 360px;
      height: 60dvh;
    }
    .error-state p {
      font-family: 'DM Mono', monospace;
      font-size: 13px;
      color: var(--color-muted);
      margin: 0;
    }
    .error-state .hint { font-size: 11px; opacity: 0.6; }
    .swipe-hint {
      position: fixed;
      bottom: 40px;
      left: 0;
      right: 0;
      z-index: 20;
      text-align: center;
    }
    .swipe-hint p {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: var(--color-muted);
      opacity: 0.6;
      margin: 0;
      letter-spacing: 0.05em;
    }
  `]
})
export class QuotesPageComponent implements OnInit {
  mood = '';
  moodLabel = '';
  queue: QuoteDTO[] = [];
  currentIndex = 0;
  isLoading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.mood = this.route.snapshot.paramMap.get('mood') ?? 'COMFORT';
    this.moodLabel = MOOD_LABELS[this.mood] ?? this.mood;
    this.loadAllQuotes();
  }

  loadAllQuotes(): void {
    this.isLoading = true;
    this.quoteService.getAllQuotesByMood(this.mood).subscribe({
      next: (quotes: QuoteDTO[]) => {
        this.queue = this.shuffle(quotes);
        this.currentIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Could not reach server.';
        this.isLoading = false;
      }
    });
  }

  get visibleQuotes(): QuoteDTO[] {
    return this.queue.slice(this.currentIndex, this.currentIndex + 2);
  }

  onSwipe(): void {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.queue.length) {
      this.queue = this.shuffle([...this.queue]);
      this.currentIndex = 0;
    } else {
      this.currentIndex = nextIndex;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  private shuffle<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
}