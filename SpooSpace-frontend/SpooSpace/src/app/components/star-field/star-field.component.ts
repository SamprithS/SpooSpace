import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-star-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-field.component.html',
  styleUrls: ['./star-field.component.scss']
})
export class StarFieldComponent implements OnInit {
  stars: Star[] = [];

  ngOnInit(): void {
    this.stars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }
}