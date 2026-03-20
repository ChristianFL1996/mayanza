import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      author: 'María González',
      text: 'Una experiencia verdaderamente mágica. El servicio es impecable y las instalaciones fusionan el lujo con la naturaleza a la perfección.',
      rating: 5,
      date: 'Octubre 2025'
    },
    {
      author: 'James Wilson',
      text: 'The absolute best place to stay near Tikal. The Ancient Spa treatments after a long day of hiking are a must. High quality service.',
      rating: 5,
      date: 'Noviembre 2025'
    },
    {
      author: 'Carlos & Ana',
      text: 'Nuestra luna de miel en Mayanza fue de ensueño. La pausa estrellada y la habitación espectacular nos dejaron memorias para toda la vida.',
      rating: 5,
      date: 'Enero 2026'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  setReview(index: number) {
    this.currentIndex = index;
  }
}
