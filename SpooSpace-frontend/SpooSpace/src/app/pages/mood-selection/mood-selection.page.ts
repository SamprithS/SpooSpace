import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StarFieldComponent } from '../../components/star-field/star-field.component';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component';
import { ThemeService } from '../../services/theme.service';

interface Mood {
  label: string;
  key: string;
  emoji: string;
  subtitle: string;
}

@Component({
  selector: 'app-mood-selection',
  standalone: true,
  imports: [CommonModule, StarFieldComponent, ThemeToggleComponent, ThemePickerComponent],
  template: `
    <div class="page">
      <app-star-field />

      <!-- Theme picker — top left -->
      <div class="theme-picker-wrap">
        <app-theme-picker />
      </div>

      <!-- Dark mode toggle — top right -->
      <div class="theme-toggle-wrap">
        <app-theme-toggle />
      </div>

      <header class="header">
        <h1 class="title">How are you feeling?</h1>
      </header>

      <main class="mood-list">
        <button
          *ngFor="let mood of moods; let i = index"
          class="mood-tile"
          [style.animation-delay]="(i * 80) + 'ms'"
          (click)="selectMood(mood.key)"
        >
          <span class="mood-emoji">{{ mood.emoji }}</span>
          <div class="mood-text">
            <h3 class="mood-label">{{ mood.label }}</h3>
            <p class="mood-subtitle">{{ mood.subtitle }}</p>
          </div>
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </main>
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
    .theme-picker-wrap {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 20;
    }
    .theme-toggle-wrap {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 20;
    }
    .header {
      position: relative;
      z-index: 10;
      padding-top: 72px;
      padding-bottom: 16px;
      text-align: center;
    }
    .title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(24px, 6vw, 32px);
      font-weight: 300;
      color: var(--color-fg);
      letter-spacing: 0.01em;
      margin: 0;
      transition: color 0.3s ease;
    }
    .mood-list {
      position: relative;
      z-index: 10;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;
      padding: 0 24px 40px;
      max-width: 480px;
      width: 100%;
      margin: 0 auto;
    }
    .mood-tile {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      border-radius: 18px;
      background: var(--color-card);
      backdrop-filter: blur(8px);
      border: 1px solid var(--color-border);
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
      animation: slide-in 0.4s ease both;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      text-align: left;
    }
    .mood-tile:hover {
      transform: scale(1.02);
      border-color: var(--color-gold);
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .mood-tile:active { transform: scale(0.98); }
    @keyframes slide-in {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .mood-emoji { font-size: 24px; flex-shrink: 0; }
    .mood-text { flex: 1; min-width: 0; }
    .mood-label {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.03em;
      color: var(--color-fg);
      margin: 0 0 2px;
      transition: color 0.3s ease;
    }
    .mood-subtitle {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: var(--color-muted);
      margin: 0;
      transition: color 0.3s ease;
    }
    .chevron {
      color: var(--color-gold);
      opacity: 0.6;
      flex-shrink: 0;
      transition: color 0.3s ease;
    }
  `]
})
export class MoodSelectionComponent implements OnInit {
  moods: Mood[] = [
    { label: 'Comfort',     key: 'COMFORT',     emoji: '🫂', subtitle: 'When you need a warm hug through words' },
    { label: 'Confidence',  key: 'CONFIDENCE',  emoji: '🔥', subtitle: "You're amazing, let them remind you"   },
    { label: 'Soft',        key: 'SOFT',        emoji: '🌙', subtitle: 'Gentle words for gentle moments'       },
    { label: 'Happy',       key: 'HAPPY',       emoji: '✨', subtitle: 'Spread that sunshine energy'           },
    { label: 'Inspiration', key: 'INSPIRATION', emoji: '💫', subtitle: 'Dream big, reach higher'               },
  ];

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.loadSaved();
  }

  selectMood(key: string): void {
    this.router.navigate(['/quotes', key]);
  }
}