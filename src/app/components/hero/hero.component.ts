import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    { bg: 'Imagenes/Foto de picina 4.jpeg' },
    { bg: 'Imagenes/Foto de recepción.jpeg' },
    { bg: 'Imagenes/Foto de una de las entradas de Hotel.jpeg' },
    { bg: 'Imagenes/Picina foto1.jpeg' }
  ];
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  scrollToElem(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  get slideNum(): string {
    return (this.currentSlide + 1).toString().padStart(2, '0');
  }

  get slideTotal(): number {
    return this.slides.length;
  }
}
