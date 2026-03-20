import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Experience {
  id: string;
  name: string;
  desc: string;
  img: string;
  type: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      id: 'masajes',
      name: 'Spa Ancestral & Masajes',
      type: 'Bienestar',
      desc: 'Relajantes masajes tradicionales, reflexología y tratamientos faciales usando ingredientes locales.',
      img: 'Imagenes/SPA.jpeg'
    },
    {
      id: 'pausa',
      name: 'Pausa Estrellada',
      type: 'Romance',
      desc: 'Vista de constelaciones en nuestro jardín bajo la luna con exquisito vino y cacao de nuestra tierra maya.',
      img: 'Imagenes/Espacio verde.jpeg'
    },
    {
      id: 'escapada',
      name: 'Escapada Romántica',
      type: 'Romance',
      desc: 'Una noche de hospedaje, cóctel de bienvenida, Pausa Estrellada y desayunos a la carta.',
      img: 'Imagenes/Picina.jpeg'
    },
    {
      id: 'tikal',
      name: 'Tour Tikal',
      type: 'Aventura',
      desc: 'Visita el sitio arqueológico maya más grande del periodo clásico, Patrimonio de la Humanidad.',
      img: 'Imagenes/Ruinas.jpeg'
    },
    {
      id: 'crater',
      name: 'El Cráter Azul',
      type: 'Aventura',
      desc: 'Nacimientos y arroyos de aguas turquesa cristalinas, refugio de vida silvestre El Pucté.',
      img: 'Imagenes/Lago.jpeg'
    }
  ];

  selectedExp: Experience | null = null;

  openModal(exp: Experience) {
    this.selectedExp = exp;
  }

  closeModal() {
    this.selectedExp = null;
  }
}
