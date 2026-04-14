import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ALBUM_THEMES, AlbumTheme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  isOpen = false;
  themes = ALBUM_THEMES;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.loadSaved();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectTheme(theme: AlbumTheme): void {
    this.themeService.applyTheme(theme.id, this.themeService.darkMode);
    this.isOpen = false;
  }

  get activeTheme(): AlbumTheme {
    return this.themes.find(t => t.id === this.themeService.activeThemeId) ?? this.themes[0];
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest('app-theme-picker')) {
      this.isOpen = false;
    }
  }
}