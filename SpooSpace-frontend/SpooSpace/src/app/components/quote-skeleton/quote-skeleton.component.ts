import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-skeleton',
  standalone: true,
  template: `
    <div class="skeleton-wrapper">
      <div class="skeleton-card">
        <div class="skeleton-image">
          <div class="shimmer"></div>
        </div>
        <div class="skeleton-body">
          <div class="skeleton-line long"></div>
          <div class="skeleton-line medium"></div>
          <div class="skeleton-line short"></div>
          <div class="skeleton-meta">
            <div class="skeleton-dot"></div>
            <div class="skeleton-line tiny"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skeleton-wrapper {
      position: absolute;
      inset: 0;
    }

    .skeleton-card {
      height: 100%;
      border-radius: 24px;
      overflow: hidden;
      background: var(--color-card);
      border: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }

    .skeleton-image {
      position: relative;
      height: 52%;
      min-height: 200px;
      flex-shrink: 0;
      background: var(--color-border);
      overflow: hidden;
    }

    .shimmer {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.12) 40%,
        rgba(255, 255, 255, 0.24) 50%,
        rgba(255, 255, 255, 0.12) 60%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: shimmer-slide 1.6s ease-in-out infinite;
    }

    @keyframes shimmer-slide {
      0%   { background-position: 200% center; }
      100% { background-position: -200% center; }
    }

    .skeleton-body {
      flex: 1;
      padding: 20px 24px 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
    }

    .skeleton-line {
      height: 14px;
      border-radius: 8px;
      background: var(--color-border);
      position: relative;
      overflow: hidden;
    }

    .skeleton-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.12) 40%,
        rgba(255, 255, 255, 0.24) 50%,
        rgba(255, 255, 255, 0.12) 60%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: shimmer-slide 1.6s ease-in-out infinite;
      animation-delay: 0.1s;
    }

    .skeleton-line.long   { width: 92%; }
    .skeleton-line.medium { width: 78%; }
    .skeleton-line.short  { width: 60%; }
    .skeleton-line.tiny   { width: 120px; height: 10px; }

    .skeleton-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .skeleton-dot {
      width: 24px;
      height: 1px;
      background: var(--color-gold);
      opacity: 0.4;
      flex-shrink: 0;
    }
  `]
})
export class QuoteSkeletonComponent {}