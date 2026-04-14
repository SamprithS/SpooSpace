import { Injectable } from '@angular/core';

export interface AlbumTheme {
  id: string;
  name: string;
  label: string;        // short display name
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemeColors {
  bg: string;
  card: string;
  fg: string;
  muted: string;
  border: string;
  gold: string;         // accent color — named 'gold' to match existing CSS var
  bgGradient?: string;  // optional gradient for bg
}

export const ALBUM_THEMES: AlbumTheme[] = [
  {
    id: 'sanctuary',
    name: 'The Star Chapter: Sanctuary',
    label: 'Sanctuary',
    light: {
      bg: '#eceef8',
      bgGradient: 'linear-gradient(135deg, #eceef8 0%, #dde0f5 50%, #ece5f5 100%)',
      card: 'rgba(255,255,255,0.82)',
      fg: '#2c2c3a',
      muted: '#8a8a9a',
      border: 'rgba(0,0,0,0.08)',
      gold: '#c8a96e',
    },
    dark: {
      bg: '#12121a',
      bgGradient: 'linear-gradient(135deg, #12121a 0%, #1a1a2e 50%, #16162a 100%)',
      card: 'rgba(30,30,42,0.88)',
      fg: '#e8e8f0',
      muted: '#6a6a7a',
      border: 'rgba(255,255,255,0.08)',
      gold: '#c8a96e',
    },
  },
  {
    id: 'star',
    name: 'The Dream Chapter: STAR',
    label: 'STAR',
    light: {
      bg: '#d6ecf7',
      bgGradient: 'linear-gradient(160deg, #87CEEB 0%, #b8dff0 40%, #e8f4fb 100%)',
      card: 'rgba(255,255,255,0.88)',
      fg: '#0a2a3a',
      muted: '#4a7a9a',
      border: 'rgba(0,80,140,0.12)',
      gold: '#FFD700',
    },
    dark: {
      bg: '#0a1a28',
      bgGradient: 'linear-gradient(160deg, #0a1a28 0%, #0d2a40 40%, #122030 100%)',
      card: 'rgba(12,30,48,0.90)',
      fg: '#e0f0fa',
      muted: '#5a8aaa',
      border: 'rgba(135,206,235,0.12)',
      gold: '#FFD700',
    },
  },
  {
    id: 'magic',
    name: 'The Dream Chapter: MAGIC',
    label: 'MAGIC',
    light: {
      bg: '#e8fdf0',
      bgGradient: 'linear-gradient(135deg, #00E676 0%, #69f0ae 30%, #e8fdf0 70%)',
      card: 'rgba(255,255,255,0.90)',
      fg: '#0a1f0e',
      muted: '#2a6a3a',
      border: 'rgba(0,180,80,0.15)',
      gold: '#FFD600',
    },
    dark: {
      bg: '#050f08',
      bgGradient: 'linear-gradient(135deg, #050f08 0%, #0a1f10 50%, #0f1a08 100%)',
      card: 'rgba(10,28,14,0.92)',
      fg: '#c8fad8',
      muted: '#3a8a4a',
      border: 'rgba(0,230,118,0.12)',
      gold: '#FFD600',
    },
  },
  {
    id: 'eternity',
    name: 'The Dream Chapter: ETERNITY',
    label: 'ETERNITY',
    light: {
      bg: '#f0e8ff',
      bgGradient: 'linear-gradient(135deg, #c084fc 0%, #a855f7 30%, #f0e8ff 70%)',
      card: 'rgba(255,255,255,0.88)',
      fg: '#2a0a4a',
      muted: '#7a3aaa',
      border: 'rgba(120,0,200,0.15)',
      gold: '#00FF7F',
    },
    dark: {
      bg: '#0e0518',
      bgGradient: 'linear-gradient(135deg, #0e0518 0%, #1a0830 50%, #120520 100%)',
      card: 'rgba(20,8,38,0.92)',
      fg: '#e8d0ff',
      muted: '#8a4aaa',
      border: 'rgba(180,0,255,0.12)',
      gold: '#00FF7F',
    },
  },
  {
    id: 'bluehour',
    name: 'Minisode 1: Blue Hour',
    label: 'Blue Hour',
    light: {
      bg: '#dde4f4',
      bgGradient: 'linear-gradient(160deg, #c8d5ee 0%, #dde4f4 60%, #e8eef8 100%)',
      card: 'rgba(255,255,255,0.85)',
      fg: '#1a2040',
      muted: '#5a6898',
      border: 'rgba(30,50,150,0.10)',
      gold: '#FF6B9D',
    },
    dark: {
      bg: '#0c1020',
      bgGradient: 'linear-gradient(160deg, #0c1020 0%, #121830 50%, #0e1428 100%)',
      card: 'rgba(16,22,44,0.92)',
      fg: '#d8e0f8',
      muted: '#4a5888',
      border: 'rgba(100,130,220,0.12)',
      gold: '#FF6B9D',
    },
  },
  {
    id: 'freeze',
    name: 'The Chaos Chapter: FREEZE',
    label: 'FREEZE',
    light: {
      bg: '#e8ecf8',
      bgGradient: 'linear-gradient(135deg, #e8ecf8 0%, #d0d8f0 50%, #dde4f8 100%)',
      card: 'rgba(255,255,255,0.85)',
      fg: '#1C2340',
      muted: '#4a5280',
      border: 'rgba(28,35,64,0.12)',
      gold: '#C71585',
    },
    dark: {
      bg: '#0a0d1c',
      bgGradient: 'linear-gradient(135deg, #0a0d1c 0%, #101428 50%, #12182e 100%)',
      card: 'rgba(14,18,36,0.92)',
      fg: '#d0d8f8',
      muted: '#4a5880',
      border: 'rgba(65,105,225,0.15)',
      gold: '#e040fb',
    },
  },
  {
    id: 'fightor',
    name: 'The Chaos Chapter: Fight or Escape',
    label: 'Fight or Escape',
    light: {
      bg: '#e8ecf5',
      bgGradient: 'linear-gradient(135deg, #c8d4e8 0%, #e0e8f5 50%, #d8e0f0 100%)',
      card: 'rgba(255,255,255,0.88)',
      fg: '#1B3A6B',
      muted: '#4a6a9a',
      border: 'rgba(27,58,107,0.12)',
      gold: '#FF69B4',
    },
    dark: {
      bg: '#080f1e',
      bgGradient: 'linear-gradient(135deg, #080f1e 0%, #0d1828 50%, #0a1422 100%)',
      card: 'rgba(12,22,44,0.92)',
      fg: '#c8d8f8',
      muted: '#4a6a9a',
      border: 'rgba(100,140,220,0.12)',
      gold: '#FF69B4',
    },
  },
  {
    id: 'thursday',
    name: "Minisode 2: Thursday's Child",
    label: "Thursday's Child",
    light: {
      bg: '#f0ece4',
      bgGradient: 'linear-gradient(135deg, #e8e0d0 0%, #f0ece4 60%, #f5f2ec 100%)',
      card: 'rgba(255,253,248,0.90)',
      fg: '#1a1208',
      muted: '#6a5a48',
      border: 'rgba(30,20,10,0.10)',
      gold: '#DC143C',
    },
    dark: {
      bg: '#100c08',
      bgGradient: 'linear-gradient(135deg, #100c08 0%, #1a1410 50%, #141008 100%)',
      card: 'rgba(24,18,12,0.92)',
      fg: '#f0e8d8',
      muted: '#8a7a68',
      border: 'rgba(220,20,60,0.12)',
      gold: '#DC143C',
    },
  },
  {
    id: 'tomorrow',
    name: 'Minisode 3: Tomorrow',
    label: 'Tomorrow',
    light: {
      bg: '#fdf5e8',
      bgGradient: 'linear-gradient(135deg, #fdf5e8 0%, #faecd8 60%, #f8e8d0 100%)',
      card: 'rgba(255,252,245,0.90)',
      fg: '#2a1508',
      muted: '#8a5a3a',
      border: 'rgba(232,69,10,0.10)',
      gold: '#E8450A',
    },
    dark: {
      bg: '#140a04',
      bgGradient: 'linear-gradient(135deg, #140a04 0%, #1e1008 50%, #180c04 100%)',
      card: 'rgba(28,14,6,0.92)',
      fg: '#fae8d0',
      muted: '#8a5a38',
      border: 'rgba(232,69,10,0.15)',
      gold: '#E8450A',
    },
  },
  {
    id: 'temptation',
    name: 'The Name Chapter: TEMPTATION',
    label: 'TEMPTATION',
    light: {
      bg: '#f0f5ee',
      bgGradient: 'linear-gradient(135deg, #c8ddc5 0%, #e0eedc 50%, #f0f5ee 100%)',
      card: 'rgba(255,255,255,0.88)',
      fg: '#1a3018',
      muted: '#4a6a48',
      border: 'rgba(45,90,39,0.12)',
      gold: '#F472B6',
    },
    dark: {
      bg: '#080f07',
      bgGradient: 'linear-gradient(135deg, #080f07 0%, #0f1a0e 50%, #0a1208 100%)',
      card: 'rgba(12,22,10,0.92)',
      fg: '#d0e8cc',
      muted: '#4a7a48',
      border: 'rgba(244,114,182,0.12)',
      gold: '#F472B6',
    },
  },
  {
    id: 'freefall',
    name: 'The Name Chapter: FREEFALL',
    label: 'FREEFALL',
    light: {
      bg: '#f0ece8',
      bgGradient: 'linear-gradient(135deg, #d8d0c8 0%, #e8e0d8 50%, #f0ece8 100%)',
      card: 'rgba(255,253,250,0.88)',
      fg: '#1a1610',
      muted: '#6a6058',
      border: 'rgba(30,22,16,0.10)',
      gold: '#1B3FCC',
    },
    dark: {
      bg: '#0c0a08',
      bgGradient: 'linear-gradient(135deg, #0c0a08 0%, #141210 50%, #100e0c 100%)',
      card: 'rgba(20,18,14,0.92)',
      fg: '#e8e0d8',
      muted: '#8a8078',
      border: 'rgba(27,63,204,0.15)',
      gold: '#4B6FFF',
    },
  },
  {
    id: 'together',
    name: 'The Ship Chapter: TOGETHER',
    label: 'TOGETHER',
    light: {
      bg: '#e8f0ff',
      bgGradient: 'linear-gradient(135deg, #93c5fd 0%, #c4b5fd 40%, #fce7f3 100%)',
      card: 'rgba(255,255,255,0.88)',
      fg: '#0a1040',
      muted: '#4a5a9a',
      border: 'rgba(59,130,246,0.15)',
      gold: '#FF1493',
    },
    dark: {
      bg: '#04081a',
      bgGradient: 'linear-gradient(135deg, #04081a 0%, #080d28 40%, #100818 100%)',
      card: 'rgba(8,12,30,0.92)',
      fg: '#d8e8ff',
      muted: '#4a5a9a',
      border: 'rgba(59,130,246,0.15)',
      gold: '#FF1493',
    },
  },
  {
    id: 'ep',
    name: '→𝓡 (EP)',
    label: '→𝓡',
    light: {
      bg: '#ffe8f5',
      bgGradient: 'linear-gradient(135deg, #FF0090 0%, #ff4db8 30%, #ffe8f5 70%)',
      card: 'rgba(255,255,255,0.90)',
      fg: '#2a0818',
      muted: '#8a2858',
      border: 'rgba(255,0,144,0.15)',
      gold: '#2a0818',
    },
    dark: {
      bg: '#120008',
      bgGradient: 'linear-gradient(135deg, #120008 0%, #200010 50%, #180008 100%)',
      card: 'rgba(24,0,14,0.92)',
      fg: '#ffe0f0',
      muted: '#aa4888',
      border: 'rgba(255,0,144,0.18)',
      gold: '#FF0090',
    },
  },
];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeId = 'sanctuary';
  private isDark = false;

  applyTheme(themeId: string, dark: boolean): void {
    this.currentThemeId = themeId;
    this.isDark = dark;

    const theme = ALBUM_THEMES.find(t => t.id === themeId) ?? ALBUM_THEMES[0];
    const colors = dark ? theme.dark : theme.light;
    const root = document.documentElement;

    root.style.setProperty('--color-bg', colors.bg);
    root.style.setProperty('--color-bg-gradient', colors.bgGradient ?? colors.bg);
    root.style.setProperty('--color-card', colors.card);
    root.style.setProperty('--color-fg', colors.fg);
    root.style.setProperty('--color-muted', colors.muted);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-gold', colors.gold);

    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Persist to localStorage
    localStorage.setItem('spoospace-theme', themeId);
    localStorage.setItem('spoospace-dark', String(dark));
  }

  loadSaved(): void {
    const savedTheme = localStorage.getItem('spoospace-theme') ?? 'sanctuary';
    const savedDark = localStorage.getItem('spoospace-dark') === 'true';
    this.applyTheme(savedTheme, savedDark);
  }

  get activeThemeId(): string { return this.currentThemeId; }
  get darkMode(): boolean { return this.isDark; }
}