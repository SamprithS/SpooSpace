import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="toggle-btn" (click)="toggle()" aria-label="Toggle dark mode">
      <svg *ngIf="themeService.darkMode" width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg *ngIf="!themeService.darkMode" width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  `,
  styles: [`
    .toggle-btn {
      padding: 8px;
      border-radius: 50%;
      background: var(--color-card);
      backdrop-filter: blur(8px);
      border: 1px solid var(--color-border);
      color: var(--color-muted);
      cursor: pointer;
      transition: color 0.2s ease, border-color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .toggle-btn:hover {
      color: var(--color-gold);
      border-color: var(--color-gold);
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    // ThemePicker handles loadSaved() — no need to call it again here
  }

  toggle(): void {
    this.themeService.applyTheme(
      this.themeService.activeThemeId,
      !this.themeService.darkMode
    );
  }
}