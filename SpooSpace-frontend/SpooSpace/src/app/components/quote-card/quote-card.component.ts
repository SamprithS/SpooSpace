import {
  Component, Input, Output, EventEmitter,
  HostListener, ElementRef
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

  get cardStyle() {
    if (!this.isTop) {
      return { transform: 'scale(0.95) translateY(8px)', opacity: '0.6', transition: 'all 0.3s ease-out' };
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

  onMouseDown(e: MouseEvent) {
    if (!this.isTop) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    e.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    this.offsetX = e.clientX - this.startX;
    this.offsetY = e.clientY - this.startY;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (!this.isDragging) return;
    this.endDrag();
  }

  onTouchStart(e: TouchEvent) {
    if (!this.isTop) return;
    this.isDragging = true;
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
  }

  onTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    this.offsetX = e.touches[0].clientX - this.startX;
    this.offsetY = e.touches[0].clientY - this.startY;
    e.preventDefault();
  }

  onTouchEnd() {
    this.endDrag();
  }

  private endDrag() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const distance = Math.sqrt(this.offsetX ** 2 + this.offsetY ** 2);
    if (distance > 80) {
      this.isExiting = true;
      setTimeout(() => this.swiped.emit(), 300);
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
}