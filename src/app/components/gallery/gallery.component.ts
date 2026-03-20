import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  images = [
    'Imagenes/Picina foto1.jpeg',
    'Imagenes/Recepción.jpeg',
    'Imagenes/Espacio de restaurante.jpeg',
    'Imagenes/Barra de Cocteles Hotels.jpeg',
    'Imagenes/SPA.jpeg',
    'Imagenes/AREA DE PARQUE.jpeg',
    'Imagenes/Sala de eventos.jpeg'
  ];

  selectedImage: string | null = null;
  currentIndex = 0;

  openImage(index: number) {
    this.currentIndex = index;
    this.selectedImage = this.images[index];
  }

  closeImage() {
    this.selectedImage = null;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedImage) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedImage) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
}
