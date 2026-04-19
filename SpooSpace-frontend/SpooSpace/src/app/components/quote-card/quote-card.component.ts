import {
  Component, Input, Output, EventEmitter, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteDTO } from '../../services/quote.service';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent {
  @Input() quote!: QuoteDTO;
  @Input() isTop = false;
  @Output() swiped = new EventEmitter<void>();

  offsetX = 0;
  offsetY = 0;
  isDragging = false;
  isExiting = false;

  private startX = 0;
  private startY = 0;

  // How far the card must be dragged before colour appears
  private readonly GLOW_THRESHOLD = 20;
  // How far before it counts as a real swipe
  private readonly SWIPE_THRESHOLD = 80;

  get swipeDirection(): 'left' | 'right' | 'none' {
    if (!this.isDragging) return 'none';
    if (this.offsetX > this.GLOW_THRESHOLD) return 'right';
    if (this.offsetX < -this.GLOW_THRESHOLD) return 'left';
    return 'none';
  }

  // How strong the glow is — 0 to 1 based on how far dragged
  get glowIntensity(): number {
    const abs = Math.abs(this.offsetX);
    if (abs < this.GLOW_THRESHOLD) return 0;
    return Math.min((abs - this.GLOW_THRESHOLD) / 80, 1);
  }

  get cardStyle() {
    if (!this.isTop) {
      return {
        transform: 'scale(0.95) translateY(8px)',
        opacity: '0.6',
        transition: 'all 0.3s ease-out',
        zIndex: '0'
      };
    }
    const rotate = this.offsetX * 0.1;
    const scale = this.isExiting ? 'scale(0.8)' : '';
    return {
      transform: `translate(${this.offsetX}px, ${this.offsetY}px) rotate(${rotate}deg) ${scale}`,
      opacity: this.isExiting ? '0' : '1',
      transition: this.isDragging ? 'none' : 'all 0.3s ease-out',
      cursor: this.isDragging ? 'grabbing' : 'grab',
      zIndex: this.isTop ? '10' : '0'
    };
  }

  // Glow overlay style — changes colour based on direction
  get glowStyle() {
    if (this.swipeDirection === 'none') return { opacity: '0' };
    const color = this.swipeDirection === 'right'
      ? `rgba(34, 197, 94, ${this.glowIntensity * 0.35})`   // green
      : `rgba(239, 68, 68, ${this.glowIntensity * 0.35})`;  // red
    return {
      opacity: '1',
      background: color,
      transition: 'none'
    };
  }

  // Direction label style
  get directionLabelStyle() {
    if (this.swipeDirection === 'none') return { opacity: '0' };
    return {
      opacity: String(this.glowIntensity),
      transition: 'none'
    };
  }

  onMouseDown(e: MouseEvent): void {
    if (!this.isTop) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    e.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.offsetX = e.clientX - this.startX;
    this.offsetY = e.clientY - this.startY;
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (!this.isDragging) return;
    this.endDrag();
  }

  onTouchStart(e: TouchEvent): void {
    if (!this.isTop) return;
    this.isDragging = true;
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
  }

  onTouchMove(e: TouchEvent): void {
    if (!this.isDragging) return;
    this.offsetX = e.touches[0].clientX - this.startX;
    this.offsetY = e.touches[0].clientY - this.startY;
    e.preventDefault();
  }

  onTouchEnd(): void {
    this.endDrag();
  }

  private endDrag(): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    const distance = Math.sqrt(this.offsetX ** 2 + this.offsetY ** 2);
    if (distance > this.SWIPE_THRESHOLD) {
      this.isExiting = true;
      setTimeout(() => this.swiped.emit(), 300);
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
}