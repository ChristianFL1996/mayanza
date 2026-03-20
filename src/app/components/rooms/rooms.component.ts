import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Room {
  id: string;
  category: string;
  name: string;
  desc: string;
  priceSingle: number;
  priceDouble: number;
  images: string[];
  amenities: string[];
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class RoomsComponent {
  rooms: Room[] = [
    {
      id: 'deluxe',
      category: 'Habitación Base',
      name: 'Habitación Deluxe',
      desc: 'Confortable ideal para viajeros individuales o parejas, equipada con servicios básicos de lujo.',
      priceSingle: 180,
      priceDouble: 360,
      images: ['Imagenes/Foto habitación simple1.jpeg', 'Imagenes/Habitación 1.jpeg'],
      amenities: ['Camas amplias', 'Baño privado', 'TV y Cable', 'Aire acondicionado', 'Wifi Gratuito']
    },
    {
      id: 'ancestral',
      category: 'Suite',
      name: 'Suite Ancestral',
      desc: 'Suite inspirada en la cultura ancestral, con espacios amplios y acceso al Club Lounge.',
      priceSingle: 300,
      priceDouble: 600,
      images: ['Imagenes/Habitación familiar.jpeg', 'Imagenes/Habitación primium3.jpeg'],
      amenities: ['Camas amplias', 'Baño privado', 'Acceso a Club Lounge', 'TV y Cable', 'Acceso GYM y SPA', 'Aire acondicionado']
    },
    {
      id: 'quetzal',
      category: 'Suite Premium',
      name: 'Suite Junior "El Quetzal"',
      desc: 'Habitación de categoría superior con mayor espacio, decoración temática y servicios premium.',
      priceSingle: 515,
      priceDouble: 1030,
      images: ['Imagenes/Habitación Primium4.jpeg', 'Imagenes/Habitación primium5.jpeg'],
      amenities: ['Espacio superior', 'Decoración temática', 'Servicios Premium', 'TV', 'Cafetera', 'Acceso a GYM y SPA']
    },
    {
      id: 'ixchel',
      category: 'Suite Exclusiva',
      name: 'Suite Ixchel',
      desc: 'La categoría más exclusiva, con servicios de lujo, áreas privadas, atención preferencial y mayordomo incluido.',
      priceSingle: 600,
      priceDouble: 1200,
      images: ['Imagenes/Habitación Primium6.jpeg', 'Imagenes/Foto de Suit.jpeg'],
      amenities: ['Mayordomo incluido', 'Acceso a áreas privadas', 'Servicios de supremo lujo', 'Acceso GYM y SPA', 'Hot tub privado']
    }
  ];

  selectedRoom: Room | null = null;
  currentImageIndex = 0;

  openModal(room: Room) {
    this.selectedRoom = room;
    this.currentImageIndex = 0;
  }

  closeModal() {
    this.selectedRoom = null;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedRoom) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedRoom.images.length) % this.selectedRoom.images.length;
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedRoom) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedRoom.images.length;
    }
  }

  setImg(index: number) {
    this.currentImageIndex = index;
  }
}
