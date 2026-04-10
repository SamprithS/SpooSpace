import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StarFieldComponent } from '../../components/star-field/star-field.component';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

interface Mood {
  label: string;
  key: string;
  emoji: string;
  subtitle: string;
}

@Component({
  selector: 'app-mood-selection',
  standalone: true,
  imports: [CommonModule, StarFieldComponent, ThemeToggleComponent],
  templateUrl: './mood-selection.page.html',
  styleUrls: ['./mood-selection.page.scss']
})
export class MoodSelectionComponent {
  moods: Mood[] = [
    { label: 'Comfort', key: 'COMFORT', emoji: '🫂', subtitle: 'When you need a warm hug through words' },
    { label: 'Confidence', key: 'CONFIDENCE', emoji: '🔥', subtitle: "You're amazing, let them remind you" },
    { label: 'Soft', key: 'SOFT', emoji: '🌙', subtitle: 'Gentle words for gentle moments' },
    { label: 'Happy', key: 'HAPPY', emoji: '✨', subtitle: 'Spread that sunshine energy' },
    { label: 'Inspiration', key: 'INSPIRATION', emoji: '💫', subtitle: 'Dream big, reach higher' },
  ];

  constructor(private router: Router) {}

  selectMood(key: string) {
    this.router.navigate(['/quotes', key]);
  }
}